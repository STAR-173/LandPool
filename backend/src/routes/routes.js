const express = require('express');
const router = express.Router();

// Example GET endpoint
router.get('/landVerify', (req, res) => {
const { name, age, document_id, image_id, location } = req.body;
try {
    kafkaQueueFunction(name, age, document_id, image_id, location);
    res.send('Sent to Kafka Queue');
} catch (error) {
    res.status(500).send('Internal Server Error');
}
});

// Example POST endpoint
router.post('/example', (req, res) => {
  const data = req.body;
  res.send(`Received data: ${JSON.stringify(data)}`);
});

// Example PUT endpoint
router.put('/example/:id', (req, res) => {
  const id = req.params.id;
  const data = req.body;
  res.send(`Updated item with id ${id} with data: ${JSON.stringify(data)}`);
});

// Example DELETE endpoint
router.delete('/example/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Deleted item with id ${id}`);
});

module.exports = router;