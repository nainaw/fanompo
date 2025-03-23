// Replace with your actual Spreadsheet ID
const spreadsheetId = '1O4gm7x7dR8dfzUbs8UnQ6o0ykzA6Oa_DZ6NEfQDfLKE';

// Replace with your API Key
const apiKey = 'AIzaSyCmERnqacZ3WTdnvTL5IrfWyjoM48U7STI';

// Construct the URL for Google Sheets API v4
const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/API?key=${apiKey}`;
// After insertion `https://sheets.googleapis.com/v4/spreadsheets/1O4gm7x7dR8dfzUbs8UnQ6o0ykzA6Oa_DZ6NEfQDfLKE/values/API?key=AIzaSyCmERnqacZ3WTdnvTL5IrfWyjoM48U7STI
async function fetchGoogleSheetData() {
    try {
        // Fetch data from Google Sheets API
        const response = await fetch(url);
        const data = await response.json();
        
        // Extract rows from the data
        const rows = data.values;

        // Get the table body element
        const tableBody = document.querySelector('#data-table tbody');

        // Loop through the rows (starting from row 1 to skip headers)
        for (let i = 1; i < rows.length; i++) {
            const row = document.createElement('li');
            
            // Loop through each cell in the row and create a table cell for each
            // rows[i].forEach(cell => {
                //const cellElement = document.createElement('td');
                //cellElement.textContent = cell;
                row.appendChild(cell);
            // });
            
            // Append the row to the table
            tableBody.appendChild(row);
        }
    } catch (error) {
        console.error('Error fetching Google Sheets data:', error);
    }
}

// Call the function to fetch and display data
document.addEventListener('DOMContentLoaded', fetchGoogleSheetData);
