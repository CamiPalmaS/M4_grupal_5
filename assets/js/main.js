const url = "https://www.themealdb.com/api/json/v1/1/categories.php"

fetch(url)
.then(response =>{
    if (!response.ok){//si la respuesta no salio bien (no fue dentro de los 200)
        throw new Error("Respuesta erronea al conectar");
    }
    return response.json();//devuelve info en json
})