async function fetchSheetData() {
  const response = await fetch('https://sheets.googleapis.com/v4/spreadsheets/YOUR_SPREADSHEET_ID/values/YOUR_RANGE?key=YOUR_API_KEY');
  const data = await response.json();
  const outputDiv = document.getElementById('output');
  data.values.forEach(row => {
    const rowDiv = document.createElement('div');
    rowDiv.textContent = row.join(', ');
    outputDiv.appendChild(rowDiv);
  });
}

fetchSheetData();
