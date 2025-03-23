async function fetchSheetData() {
  const response = await fetch('https://sheets.googleapis.com/v4/spreadsheets/1O4gm7x7dR8dfzUbs8UnQ6o0ykzA6Oa_DZ6NEfQDfLKE/values/API?key=AIzaSyCmERnqacZ3WTdnvTL5IrfWyjoM48U7STI');
  const data = await response.json();
  const outputDiv = document.getElementById('output');
  data.values.forEach(row => {
    const rowDiv = document.createElement('div');
    rowDiv.textContent = row.join(', ');
    outputDiv.appendChild(rowDiv);
  });
}

fetchSheetData();
