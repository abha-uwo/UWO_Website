const { getUnifiedDb } = require('../unified_routes/db');

async function fixRecords() {
  const db = await getUnifiedDb();
  
  // Update rzp_sub_1791374206312 (pay_Tky7czabFne3VB)
  const res1 = await db.collection('subscriptions').updateOne(
    { _id: 'rzp_sub_1791374206312' },
    {
      $set: {
        status: 'failed',
        tier: 'BASIC',
        plan_name: 'Advocate Basic Plan',
        customer_email: 'jattulcharam26@gmail.com',
        customer_name: 'Jattulcharam',
        customer_phone: '+917709126989',
        transaction_id: 'pay_Tky7czabFne3VB',
        auto_renew: false,
        error_reason: 'Payment declined by bank (compliance_violation)',
        updated_at: new Date()
      }
    }
  );
  console.log('Updated rzp_sub_1791374206312:', res1.modifiedCount);

  // Update rzp_sub_1791374238281 (pay_TkyCZvbirvxWmU)
  const res2 = await db.collection('subscriptions').updateOne(
    { _id: 'rzp_sub_1791374238281' },
    {
      $set: {
        status: 'failed',
        tier: 'BASIC',
        plan_name: 'Advocate Basic Plan',
        customer_email: 'jattulcharam26@gmail.com',
        customer_name: 'Jattulcharam',
        customer_phone: '+917709126989',
        transaction_id: 'pay_TkyCZvbirvxWmU',
        auto_renew: false,
        error_reason: 'Gateway – Technical Error (gateway_technical_error)',
        updated_at: new Date()
      }
    }
  );
  console.log('Updated rzp_sub_1791374238281:', res2.modifiedCount);

  const updatedDocs = await db.collection('subscriptions').find({
    _id: { $in: ['rzp_sub_1791374206312', 'rzp_sub_1791374238281'] }
  }).toArray();
  console.log('Verified updated docs in DB:');
  console.log(JSON.stringify(updatedDocs, null, 2));

  process.exit(0);
}

fixRecords().catch((err) => {
  console.error(err);
  process.exit(1);
});
