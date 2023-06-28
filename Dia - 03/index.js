let edad;
let genero;
let respuesta;

function recomendar() {

    genero = document.getElementById("genero").value;
    
    edad = document.getElementById("usuarioEdad").value;

    respuesta = document.getElementById("respuesta");


    switch (genero) {

        case "accion":

            if(edad <= 12) {

                respuesta.textContent = "Película de acción para menores de 12";

            } else if (edad <= 30) {
                
                respuesta.textContent = "Película de acción para menores de 30";

            } else {
                
                respuesta.textContent = "Película de acción para mayores de 30";
            }
            break;
            
        case "aventura":
                
            if(edad <= 12) {

                respuesta.textContent = "Película de aventura para menores de 12";
    
            } else if (edad <= 30) {
                    
                respuesta.textContent = "Película de aventura para menores de 30";
    
            } else {
                    
                respuesta.textContent = "Película de aventura para mayores de 30";
            }
            break;
                
        case "comedia":
                    
             if(edad <= 12) {

                respuesta.textContent = "Película de comedia para menores de 12";
        
            } else if (edad <= 30) {
                        
                respuesta.textContent = "Película de comedia para menores de 30";
        
            } else {
                        
                respuesta.textContent = "Película de comedia para mayores de 30";
                    }
            break;
                 
        case "drama":
                     
            if(edad <= 12) {
     
                respuesta.textContent = "Película de drama para menores de 12";
             
            } else if (edad <= 30) {
                             
                respuesta.textContent = "Película de drama para menores de 30";
             
            } else {
                             
                respuesta.textContent = "Película de drama para mayores de 30";
            }
            break;

        default:
            break;
    }


}