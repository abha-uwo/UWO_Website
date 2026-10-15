const mongoose = require('mongoose');
require('dotenv').config();
const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

async function check(uri, label) {
  try {
    const conn = await mongoose.createConnection(uri).asPromise();
    console.log('Connected to', label);
    const admin = conn.db.admin();
    const dbs = await admin.listDatabases();
    console.log(label, 'Databases:', dbs.databases.map(d => d.name));
    for (const d of dbs.databases) {
      if (['admin', 'local'].includes(d.name)) continue;
      const subConn = conn.useDb(d.name);
      const cols = await subConn.db.listCollections().toArray();
      console.log(`DB [${d.name}] collections:`, cols.map(c => c.name));
    }
    await conn.close();
  } catch (e) {
    console.error('Error on', label, e.message);
  }
}

async function run() {
  await check(process.env.MONGO_URI, 'Cluster0');
  if (process.env.UNIFIED_MONGODB_URI) {
    await check(process.env.UNIFIED_MONGODB_URI, 'Unified');
  }
}
run();
