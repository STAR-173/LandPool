const cassandra = require('cassandra-driver');
const { contactPoints, localDataCenter, keyspace } = require('../config/cassandraConfig');

const client = new cassandra.Client({
  contactPoints,
  localDataCenter,
  keyspace,
});

const saveToCassandra = async (data) => {
  const query = 'INSERT INTO your_table_name (name, age, document_id, image_id, location) VALUES (?, ?, ?, ?, ?)';
  const params = [data.name, data.age, data.document_id, data.image_id, data.location];
  await client.execute(query, params, { prepare: true });
};

module.exports = {
  saveToCassandra,
};
