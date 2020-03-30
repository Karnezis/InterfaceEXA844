var myHeaders = new Headers();//Configurações de CORS necessárias.
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Content-Type", "text/plain");
myHeaders.append("Access-Control-Allow-Origin", "locahost");

var todayDate = new Date().toISOString().slice(0,10);//Pegando a data de hoje.
var data = String(todayDate);//Formatando a data de hoje.
var dataHoje = "{\n  \"data\": \""+data+"\"\n}";//Variável que representa o dia que o usuário quer ver.
var requestOptions = {//Requisitando as músicas que estão populares hoje.
  method: 'POST',
  headers: myHeaders,
  body: dataHoje,
  redirect: 'follow'
};
fetch("https://rhzlbi2pd9.execute-api.us-east-1.amazonaws.com/default/getMusics", requestOptions)
  .then(res => res.json()) // Transforma a resposta em json
  .then(data => populateTable(data)) // Passa os dados para a função
  .catch(error => console.log('error', error)); // Acaso apresente erro, informa.

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
