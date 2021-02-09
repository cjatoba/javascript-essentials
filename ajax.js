const form_selected = document.querySelector("#form_id");

let data_form = new FormData(form_selected);

data_form.append("key_name", "value");
data_form.append("key_name2", "value");

fetch("page.php", {
    method: "POST",
    body: data_form
})
.then(response => response.json())
.then(responseJson => {
    
})
.catch(error => {
    console.log("Erro na requisição: " + fail);
}) 