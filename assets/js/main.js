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

const selectCategories = (categorias) => {
    
}