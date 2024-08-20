async function getCategories(){
    const url = "https://www.themealdb.com/api/json/v1/1/categories.php"

    fetch(url)
    .then(response =>{
        if (!response.ok){//si la respuesta no salio bien (no fue dentro de los 200)
            throw new Error("Respuesta erronea al conectar");
        }
        return response.json();//devuelve info en json
    })
    
    .then(data =>{//por standar se le nombra data al string de json
    console.log(data);
    selectCategories(data.categories);

    })
    .catch(error =>{//en caso de que haya lanzado un error se captura
    alert("Hubo un erro: "+error)
    })
}
//llamar a la funcion asincrona
getCategories();

//funcion para mostrar categorias obtenidas en el select para el usuario
const selectCategories = (categorias) => {
    categorias.sort((a,b) => a.strCategory.localeCompare(b.strCategory));
    
    //apuntar al select por ID
    const selectElement = document.getElementById("categorias");

    //para que recorra las categorias sobre las categorías
    categorias.forEach(categoria => {
        //para crear los elementos option para el select
        const option = document.createElement("option");
        //asignar valor (id) y titulo/nombre (strCategory)
        option.value = categoria.idCategory;
        option.textContent = categoria.strCategory;

        //para que se añadan las opciones
        selectElement.appendChild(option);
    });
}