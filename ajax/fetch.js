const form_selected = document.querySelector("#form_id");

let data_form = new FormData(form_selected);

data_form.append("key_name", "value");
data_form.append("key_name2", "value");

const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");

fetch("page.php", {
    headers: myHeaders,
    method: "POST",
    mode: 'cors',
    body: data_form
})
.then(response => response.json()) // response.blob() para binários; response.text() para texto; response.json() para JSON;
.then(responseJson => {
    //Retorno da requisição no formato especificado no then anterior (Ocorrerá um erro caso o retorno seja diferente do esperado)
})
.catch(error => {
    console.log("Erro na requisição: " + fail);
}) 
