const { sendMessage } = require('../services/kafkaService');

const landVerify = (req, res) => {
  const { name, age, document_id, image_id, location } = req.body;
  try {
    sendMessage({ name, age, document_id, image_id, location });
    res.send('Sent to Kafka Queue');
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  landVerify,
};