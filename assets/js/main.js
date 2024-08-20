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
    showCategories(data.categories);
    })
    .catch(error =>{//en caso de que haya lanzado un error se captura
    alert("Hubo un error: "+error)
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

const showCategories = (categorias) => {
    //apunta al select y se añade evento onchange
    document.getElementById("categorias").addEventListener("change", () =>{
        const selection = document.getElementById("categorias").value;

        //se busca el valor seleccionado dentro de las categorias del data
        const selectedCategory = categorias.find(categoria => categoria.idCategory === selection);

        //se manda a imprimir info en el div
        document.getElementById("resultado").innerHTML = `
        <div class="container-fluid border m-2 p-4">
        <h3>${selectedCategory.strCategory}</h3>
        <img src="${selectedCategory.strCategoryThumb}" 
            alt="${selectedCategory.strCategory}" class="img-fluid"><br>
        <p>${selectedCategory.strCategoryDescription}</p>
        </div>
        `;
    }); 
}