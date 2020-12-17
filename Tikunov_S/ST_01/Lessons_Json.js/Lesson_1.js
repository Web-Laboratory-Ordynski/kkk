var breedPromise = fetch('https://api.thedogapi.com/v1/breeds/search?q=A');
breedPromise
/* Получение ответа на запрос к апишке*/
    .then(response => {
        return response.json();
    })
    /* Преобразование значений ответа от апишки в джейсон*/
    .then(breedsArray => {
        var breedObjectJson = JSON.stringify(breedsArray);
        localStorage.setItem('breed', breedObjectJson);
    });

var elem = document.getElementById('system_01');
elem.onclick = function() {
    var breedObjectStorage = localStorage.getItem('breed');
    /* Возвращаем в массив значения апишки, которые были предварит сохранены в локал сторадж */
    var breeds =  JSON.parse(breedObjectStorage); 
    // console.log(breeds);
    breeds.forEach((breed)=>{
    console.log(breed);
    })
  };
  