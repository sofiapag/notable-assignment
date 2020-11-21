const express = require('express');
const http = require('http')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const app = express();
app.use(express.json());

const db = low(new FileSync('./db.json'));
 db.read();

app.get('/', (res) => {
  res.json({ message: 'Server is running!' });
});

/**
 * Get a list of physicians
 * GET
 */
app.get('/physicians', async (req, res) => {
  const data = await db.get('physicians');
  if (!data) {
    return res.status(404).json({ error: 'Not found' });
  }
  res.json(data);
});

/**
 * Get a list of appointments by physician
 * GET
 */
app.get('/appointments/:physicianId', async (req, res) => {
  console.log(req.params);
  const data = await db.get('appointments')
    .filter({ physicianId: req.params.physicianId })
    .value();
  if (!data) {
    return res.status(404).json({ error: 'Not found' });
  }
  res.json(data);
});

const port = 8000;

app.listen(port, () => {
  console.log(`Notable app listening at http://localhost:${port}`)
})
