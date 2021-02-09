const select = document.querySelector('#id_select')
select.options[select.selectedIndex].value

var opt = document.createElement('option');
opt.value = "Value";
opt.innerHTML = "Value";
select.appendChild(opt); 