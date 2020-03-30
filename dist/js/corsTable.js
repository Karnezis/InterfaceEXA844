import axios from 'axios';
const url = "https://rhzlbi2pd9.execute-api.us-east-1.amazonaws.com/default/getMusics";

async function api() {
    let config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };
    await axios
      .post(
        url,
        {
          param: "2020-03-30"
        },
        config
      )
      .then(res => res.json()) // Transforma a resposta em json
      .then(data => populateTable(data)) // Passa os dados para a função
      .catch(error => console.log('error', error)); // Acaso apresente erro, informa.
      ;

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
}

api();