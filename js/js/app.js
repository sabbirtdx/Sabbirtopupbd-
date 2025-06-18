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
