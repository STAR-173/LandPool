const kafka = require('kafka-node');
const { kafkaHost, kafkaLandTopic } = require('../config/kafkaConfig');

const client = new kafka.KafkaClient({ kafkaHost });
const producer = new kafka.Producer(client);

const sendMessage = (message) => {
  const payloads = [
    { topic: kafkaLandTopic, messages: JSON.stringify(message) }
  ];

  producer.send(payloads, (err, data) => {
    if (err) {
      console.error('Error sending message to Kafka:', err);
    } else {
      console.log('Message sent to Kafka:', data);
    }
  });
};

module.exports = {
  sendMessage,
};