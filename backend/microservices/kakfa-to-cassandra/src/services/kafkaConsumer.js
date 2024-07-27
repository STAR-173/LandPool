const kafka = require('kafka-node');
const { kafkaHost, kafkaTopic, kafkaGroupId } = require('../config/kafkaConfig');
const { saveToCassandra } = require('./cassandraService');

const client = new kafka.KafkaClient({ kafkaHost });
const consumer = new kafka.Consumer(
  client,
  [{ topic: kafkaTopic, partition: 0 }],
  { groupId: kafkaGroupId }
);

consumer.on('message', async (message) => {
  try {
    const data = JSON.parse(message.value);
    await saveToCassandra(data);
    console.log('Data saved to Cassandra:', data);
  } catch (error) {
    console.error('Error processing message:', error);
  }
});

consumer.on('error', (error) => {
  console.error('Error with Kafka consumer:', error);
});
