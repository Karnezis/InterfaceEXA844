var myHeaders = new Headers();//Configurações de CORS necessárias.
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Content-Type", "text/plain");
myHeaders.append("Access-Control-Allow-Origin", "locahost");

var raw = "{\n  \"data\": \"2020-03-29\"\n}";//Variável que representa o dia que o usuário quer ver.

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};
fetch("https://rhzlbi2pd9.execute-api.us-east-1.amazonaws.com/default/getMusics", requestOptions)
  .then(res => res.json()) // Transforma a resposta em json
  .then(data => populateTable(data)) // Passa os dados para a função
  .catch(error => console.log('error', error)); // Acaso apresente erro, informa.

// criei isso aqui (qye é uma copia do de cima, só que em uma função)
function chamandoUsandoFuncao(dados) {
  var myHeaders = new Headers();//Configurações de CORS necessárias.
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Content-Type", "text/plain");
  myHeaders.append("Access-Control-Allow-Origin", "locahost");

  var raw = JSON.stringify(dados);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://rhzlbi2pd9.execute-api.us-east-1.amazonaws.com/default/getMusics", requestOptions)
    .then(res => res.json()) // Transforma a resposta em json
    .then(data => populateTable(data)) // Passa os dados para a função
    .catch(error => console.log('error', error)); // Acaso apresente erro, informa.
}

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
