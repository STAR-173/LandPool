module.exports = {
  contactPoints: [process.env.CASSANDRA_CONTACT_POINT],
  localDataCenter: process.env.CASSANDRA_LOCAL_DATACENTER,
  keyspace: process.env.CASSANDRA_KEYSPACE,
};
