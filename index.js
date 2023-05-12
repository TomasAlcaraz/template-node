import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router from './src/routes/index.js';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/', router); // Usar el router

app.listen(3000, () => {
  console.log('Server on port 3000');
});
