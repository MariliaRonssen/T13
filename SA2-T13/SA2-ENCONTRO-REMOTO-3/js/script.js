



function mostrarMenu() {
    let menu = document.getElementById("menu")

    if (getComputedStyle(menu).display == 'none') {
        menu.style.display = 'flex';
    }else{
        menu.style.display = 'none';
    }    
        
}

function cadastrarNovidades() {
    let email = document.getElementById("cad-email").value     
    console.log(email);
    alert(email); 
   
}