import express, {Response} from 'express';
import cors from 'cors';

const compression = (await import('compression')).default
const app = express();

// Enable All CORS Requests
app.use(cors());

//Compress all HTTP responses
app.use(compression());

// Load the static files from the dist folder
app.use(express.static('dist'));

// Server App index.html
app.get('*', (_, res: Response) => {
  res.sendFile('index.html', { root: 'dist' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
