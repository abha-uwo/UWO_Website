const mongoose = require('mongoose');
require('dotenv').config();
const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

async function searchAll(uri, label) {
  const conn = await mongoose.createConnection(uri).asPromise();
  const admin = conn.db.admin();
  const dbs = await admin.listDatabases();
  
  for (const d of dbs.databases) {
    if (['admin', 'local'].includes(d.name)) continue;
    const dbInstance = conn.useDb(d.name);
    const cols = await dbInstance.db.listCollections().toArray();
    for (const c of cols) {
      try {
        const regex = /dpiit|ropar|tbif|duns|recognition|credentials|credential|startup/i;
        const docs = await dbInstance.db.collection(c.name).find({
          $or: [
            { name: { $regex: regex } },
            { title: { $regex: regex } },
            { key: { $regex: regex } },
            { type: { $regex: regex } },
            { slug: { $regex: regex } },
            { category: { $regex: regex } },
            { description: { $regex: regex } },
            { content: { $regex: regex } },
            { text: { $regex: regex } },
            { value: { $regex: regex } }
          ]
        }).toArray();
        if (docs.length > 0) {
          console.log(`FOUND in [${d.name}.${c.name}]: count ${docs.length}`);
          for (const doc of docs) {
            console.log('Doc keys:', Object.keys(doc));
            console.log('Doc sample:', JSON.stringify(doc).substring(0, 300));
          }
        }
      } catch (err) {}
    }
  }
  await conn.close();
}

async function run() {
  await searchAll(process.env.MONGO_URI, 'Cluster0');
  await searchAll(process.env.UNIFIED_MONGODB_URI, 'Unified');
}
run();
