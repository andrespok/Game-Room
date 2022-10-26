
function formulario() {
    const nombre = document.getElementById("nombre");
    const password = document.getElementById("password");
    const dni = document.getElementById("dni");
    const form = document.getElementById("form");
    const errorElement = document.getElementById("error");
    
        form.addEventListener("submit", (e) => {
         let messages = [];
            if(nombre.value == '')
            {
               messages.push('Un nombre es requerido'); 
         }
         if(dni.value.length < 7){
            messages.push("El DNI debe tener entre 7 y 8 caracteres sin puntos")
         }
         if(dni.value.length > 8){
            messages.push("El DNI debe tener entre 7 y 8 caracteres sin puntos")
         }
            if(password.value.length < 6)
            {
               messages.push("La contraseña debe tener mas de 6 caracteres");
         }
            if(messages.length > 0){
              e.preventDefault();
              errorElement.innerText = messages.join('\n')
            }
        });
    };
    
   