const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);
const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.MONGODB_URI || process.env.MONGO_URI;

async function run() {
  await mongoose.connect(MONGO_URI);
  const Project = mongoose.model('Project', new mongoose.Schema({ name: String, target_audience: String, status: String, short_description: String }, { strict: false }));
  
  const res = await Project.updateOne(
    { _id: '6abf4d83c221e79525e849c0' },
    { 
      $set: { 
        name: 'AI Education', 
        target_audience: 'Universities & Schools',
        short_description: 'Unified Enterprise Digital Campus & AI Collaboration Operating System tailored for K-12 Schools, Colleges, and Universities.'
      } 
    }
  );
  console.log('Project updated successfully:', res);
  
  const updated = await Project.findById('6abf4d83c221e79525e849c0');
  console.log('Updated document:', { id: updated._id, name: updated.name, target_audience: updated.target_audience });
  
  await mongoose.disconnect();
}

run().catch(console.error);
