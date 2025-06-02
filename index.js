const express = require('express');
const axios = require('axios');
const app = express();

app.get('/proxy', async (req, res) => {
  const { id } = req.query;
  if (!id) return res.status(400).send('ID required');
  try {
    const response = await axios.get(`http://78.188.72.146:8080/export_report.php?id=${id}`);
    res.send(response.data);
  } catch (err) {
    res.status(500).send('Proxy Error: ' + err.message);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy running on port ${PORT}`);
});
