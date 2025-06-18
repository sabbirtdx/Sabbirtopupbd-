function showSection(id) {
  document.getElementById('balance').style.display = 'none';
  document.getElementById('topup').style.display = 'none';
  document.getElementById(id).style.display = 'block';
}

function addBalance() {
  alert("Balance add request sent!");
}

function submitTopup() {
  alert("Topup request sent!");
}
const apiToken = 'UVHY3orn5fJk62VeSyzm0isbAAs1YPryxtXIiBGMUDaTIvSaHq';

async function verifyPayment() {
  const amount = document.getElementById('amount').value;
  const txnId = document.getElementById('txnId').value.trim();
  const messageEl = document.getElementById('message');

  if (!txnId) {
    messageEl.innerText = 'Txn ID দিন প্লিজ।';
    messageEl.style.color = 'red';
    return;
  }

  messageEl.innerText = 'পেমেন্ট যাচাই করা হচ্ছে... অনুগ্রহ করে অপেক্ষা করুন।';
  messageEl.style.color = 'black';

  // RupantorPay API URL উদাহরণ (আপনি নিজের API ডকুমেন্টেশন থেকে সঠিক URL ব্যবহার করবেন)
  const url = `https://api.rupantorpay.com/api/v1/payment/verify?token=${apiToken}&txn_id=${txnId}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status === 'success' && data.amount === parseInt(amount)) {
      messageEl.style.color = 'green';
      messageEl.innerText = `পেমেন্ট সফল হয়েছে! ${amount} টাকা আপনার ব্যালেন্সে যোগ হয়েছে।`;

      // এখানে আপনার ব্যালেন্স আপডেট করার কোড দিন, যেমন:
      // updateUserBalance(amount);

    } else {
      messageEl.style.color = 'red';
      messageEl.innerText = 'পেমেন্ট যাচাই ব্যর্থ হয়েছে বা পরিমাণ মেলেনি। আবার চেষ্টা করুন।';
    }
  } catch (error) {
    messageEl.style.color = 'red';
    messageEl.innerText = 'পেমেন্ট যাচাই করার সময় সমস্যা হয়েছে। আবার চেষ্টা করুন।';
    console.error('Error verifying payment:', error);
  }
}
