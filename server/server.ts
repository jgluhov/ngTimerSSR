import express from 'express';
import { join } from 'path';

const app = express();

const PORT = process.env.PORT || 3000;
const DIST_PATH = join(process.cwd(), 'dist');
const ROUTES_PATH = join(DIST_PATH, 'browser', 'routes');

app.set('view engine', 'html');
app.set('views', join(DIST_PATH, 'browser'));

app.get('*.*', express.static(join(DIST_PATH, 'browser')));

app.get('/', (_, res) => {
  res.sendFile(join(ROUTES_PATH, 'index.html'));
});

app.get('/timer', (req, res) => {
  res.sendFile(join(ROUTES_PATH, 'timer', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
});
