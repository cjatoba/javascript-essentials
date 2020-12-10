const form_selected = document.querySelector("#form_id");

let data_form = new FormData(form_selected);

data_form.append("key_name", "value");
data_form.append("key_name2", "value");

fetch("page.php", {
    method: "POST",
    body: data_form
})
.then(function(response){
    if(response.ok){
        response.text().then(function(myText){
            
        })
    }else{
        console.log("Fail");
    }
})
.catch(function(error){
    console.log("Error");
})