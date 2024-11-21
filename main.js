let botonbuscar = document.getElementById("buscar");//Busca y guarda en la variable botonbuscar el elemento del DOM con el id buscar (el botón "Buscar").
let texto = document.getElementById("entradatxt");//Guarda en texto el elemento con id entradatxt (el campo de texto donde el usuario escribe).
let botonelm = document.getElementById("elm")//Asigna a botonelm el botón con id elm (el botón de borrar "⌫").
let imagenespant = document.getElementById("imagenes")//Asocia imagenespant con el contenedor (div) que mostrará las imágenes obtenidas.
const apikey = "TgZxRXOsLDoqEWhaeimFst2gexFfatph"//Declara la constante apikey, que almacena la clave de acceso para la API de Giphy.


botonbuscar.addEventListener("click", () => {//Agrega un event listener que ejecutará la función cuando se haga clic en el botón "Buscar".
    const term = texto.value//Guarda en la variable term el texto ingresado en el campo de entrada (entradatxt).
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${term}&limit=9&offset=0&rating=g&lang=es`;//Hace una llamada a la API de Giphy utilizando fetch.api_key=${apikey}: La clave para autenticar la solicitud.q=${term}: El término de búsqueda (lo que el usuario escribió).limit=9: Limita el número de GIFs devueltos a 9.offset=0: Empieza desde el primer resultado.rating=g: Filtra resultados aptos para todo público.lang=es: Busca GIFs relacionados con palabras en español.
    const llamada = fetch (url);//Realiza una solicitud a la API.
    llamada //Comienza el procesamiento de la promesa devuelta por fetch.
    .then((responce) => {//Usa .then para manejar la respuesta de la API.
        return responce.json();  //  Convierte la respuesta (que está en formato JSON) a un objeto JavaScript utilizando responce.json().
        
    })
    .then((results) => {//El resultado procesado se recibe en results.
        console.log(results)//Muestra todo el contenido de la respuesta en la consola
        results.data.forEach(element => {//Itera sobre la lista de datos (results.data) devuelta por la API.
            console.log(element.images.original.url);//Muestra en la consola la URL del GIF original.
            let imagen = document.createElement("img");//Crea un elemento <img> para cada GIF
            imagen.setAttribute("src", element.images.original.url );//Establece el atributo src de la imagen con la URL del GIF.
            imagenespant.appendChild(imagen)//Añade la imagen al contenedor (imagenes), haciendo que se muestre en la página.
        });//Cierra el bucle forEach.
    })
    .catch((error) => {//Maneja errores con .catch
        console.error(error.mensaje);//Si ocurre un problema (como un fallo en la conexión), muestra el error en la consola.
})
});

botonelm.addEventListener("click", () => {//Agrega un evento al botón "⌫" para ejecutar esta función cuando se haga clic.
    imagenespant.innerHTML = ""; //Limpia el contenido del contenedor imagenes, eliminando todos los GIFs mostrados.
    texto.value = "";//Limpia el campo de texto, dejándolo vacío.
});