import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());

app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

app.use((req: Request, res: Response, next) => {
  res.status(404).json({ error: 'Not found' });
});

export default app;
