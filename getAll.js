const URL = 'http://localhost:3500/employees'

fetch(URL).then(res => res.json()).then(data => console.log(data))