fetch('https://sheets.googleapis.com/v4/spreadsheets/1jCaJigMqi3sSmw1Y13ZV0wCmRQZ3PF3YkD4MCu_cyDs/values/APIC?alt=json&key=AIzaSyCmERnqacZ3WTdnvTL5IrfWyjoM48U7STI', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
})
   .then(response => response.json())
   .then(response => console.log(JSON.stringify(response)))
