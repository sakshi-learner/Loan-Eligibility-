import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { PythonShell } from 'python-shell';

const app = express();
const PORT = 5001;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/predict', (req, res) => {
  const input = req.body;
  const options = {
    mode: 'json',
    pythonOptions: ['-u'],
    scriptPath: './',
    args: [JSON.stringify(input)]
  };

  PythonShell.run('predict.py', options).then(results => {
    if (results && results[0]) {
      res.json({ result: results[0].result });
    } else {
      res.status(500).json({ error: 'No result from Python script' });
    }
  }).catch(err => {
    console.error(err);
    res.status(500).json({ error: 'Prediction failed' });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
