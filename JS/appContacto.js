const nombre = document.getElementById("nombre")
const email = document.getElementById("email")
const motivo = document.getElementById("motivo")
const consulta = document.getElementById("consulta")
const btn = document.getElementById("enviar")

function eventos(){
    document.addEventListener("DOMContentLoaded", btnDisabled)

    nombre.addEventListener("blur, formularioEviar")
    email.addEventListener("blur, formularioEviar")
    consulta.addEventListener("blur, formularioEviar")
    
}
function btnDisabled(){
    btn.disabled = true
}
function formularioEnviar(e){
    if(e.target.value.length > 0){

    }else{
        e.target.classList.add("invalido")
        mensajeError("")
    }
}

function mensajeError(mensaje){
    const errorMensaje = document.createElement("p")
}


function validacion() 
        {
            valor = document.getElementById("email").value;
              
            if (!(/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail|edu)\.(?:|com|ar)+$/.test(valor)))
            {
                document.getElementById('mensaje').innerHTML = "No es una direccion de email correcta" ;
                
                elemento = document.getElementById('email');
                elemento.value = '';
                elemento.focus();

                return false;
            }
            
            return true;          
        }