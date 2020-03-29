var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Content-Type", "text/plain");
myHeaders.append("Access-Control-Allow-Origin", "locahost");

var raw = "{\n  \"data\": \"2020-03-28\"\n}";

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};
fetch("https://rhzlbi2pd9.execute-api.us-east-1.amazonaws.com/default/getMusics", requestOptions)
  .then(res => res.json()) // transforma a resposta em json
  .then(data => populateTable(data)) // coloca dados nas coisas
  .catch(error => console.log('error', error)); // se der erro, printa

function populateTable(data) {
    $('#dataTable').DataTable({
        data: data,
        "columns": [
            { "data": "genre" },
            { "data": "title" },
            { "data": "artist" },
            { "data": "views" }
        ],
        "bDestroy": true
    });
}