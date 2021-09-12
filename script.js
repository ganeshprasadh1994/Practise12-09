function clicked(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(
        data => console.log(data)
    )
    .catch(function(error){
        console.log(error);
    })
}