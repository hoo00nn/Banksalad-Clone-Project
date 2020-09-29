const pool = require('./config');

const getConnection = async () => {
  try {
    const connection = await pool.getConnection(async (conn) => conn);
    return connection;
  } catch (err) {
    console.log('DB Error');
    return false;
  }
};

module.exports = {
  getConnection,
};
