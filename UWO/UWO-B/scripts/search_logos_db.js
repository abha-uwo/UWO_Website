const mongoose = require('mongoose');
require('dotenv').config();
const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

async function run() {
  const conn = await mongoose.createConnection(process.env.UNIFIED_MONGODB_URI, { dbName: 'unified_service_db' }).asPromise();
  const cols = await conn.db.listCollections().toArray();
  let foundAny = false;
  for (const c of cols) {
    try {
      const docs = await conn.db.collection(c.name).find({
        $or: [
          { logo: { $regex: 'iit|ropar|tbif|dpiit|startup|duns', $options: 'i' } },
          { image: { $regex: 'iit|ropar|tbif|dpiit|startup|duns', $options: 'i' } },
          { url: { $regex: 'iit|ropar|tbif|dpiit|startup|duns', $options: 'i' } },
          { icon: { $regex: 'iit|ropar|tbif|dpiit|startup|duns', $options: 'i' } },
          { photo: { $regex: 'iit|ropar|tbif|dpiit|startup|duns', $options: 'i' } },
          { title: { $regex: 'iit|ropar|tbif|dpiit|duns', $options: 'i' } },
          { name: { $regex: 'iit|ropar|tbif|dpiit|duns', $options: 'i' } }
        ]
      }).toArray();
      if (docs.length > 0) {
        foundAny = true;
        console.log(`MATCH in [${c.name}]:`, docs.length);
        console.log(JSON.stringify(docs, null, 2));
      }
    } catch (e) {}
  }
  if (!foundAny) console.log('No matches found in unified_service_db');
  await conn.close();
}
run();
