import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentRoutePath$: Observable<string>;
  constructor(public router: Router) {
    this.currentRoutePath$ = this.router.events
      .pipe(
        filter((e: RouterEvent) => e instanceof NavigationEnd),
        map((e: NavigationEnd) => e.url)
      );
  }


}
