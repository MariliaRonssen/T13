$(document).ready(function() {
    alert("jquery esta ok")
})

// toggle
$(document).ready(function() {

    $("#barras").click(function(){

        if ( $("#menu").hasClass("menu-ativo") ) {
            $("#menu").removeClass("menu-ativo")
        } else {
            $("#menu").addClass("menu-ativo")
            
        }
    })
})



// function mostrarMenu() {
//     let menu = document.getElementById("menu")

//     if (getComputedStyle(menu).display == 'none') {
//         menu.style.display = 'flex';
//     }else{
//         menu.style.display = 'none';
//     }    
        
// }

function cadastrarNovidades() {  
    let email = document.getElementById("cad-email").value     
    console.log(email);
    alert(email); 
}