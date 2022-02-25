import express from 'express';
import DiagnoseRouter from './routes/DiagnoseRouter';
import PatientsRouter from './routes/PatientsRouter';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3001;

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use('/api/diagnoses', DiagnoseRouter);
app.use('/api/patients', PatientsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});