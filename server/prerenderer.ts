import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { renderModuleFactory } from '@angular/platform-server';
import { AppServerModuleNgFactory, LAZY_MODULE_MAP } from '../dist/server/main.js';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import mkdirp from 'mkdirp';
import { enableProdMode } from '@angular/core';

const DIST_PATH = join(process.cwd(), 'dist');

const indexHtml = readFileSync(join(DIST_PATH, 'browser', 'index.html')).toString();

const routes = [
  '/',
  '/timer'
];

enableProdMode();

routes.forEach(async (route: string) => {
  const template = await renderModuleFactory(AppServerModuleNgFactory, {
    document: indexHtml,
    url: route,
    extraProviders: [
      provideModuleMap(LAZY_MODULE_MAP)
    ]
  });
  const folderPath = join(join(DIST_PATH, 'browser', 'routes', route));
  mkdirp.sync(folderPath);
  writeFileSync(join(folderPath, 'index.html'), template);
});
