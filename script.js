btn.addEventListener('click',function(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(data =>{
        console.log(data);
        var img=document.createElement("img");
        img.src=data.message;
        document.body.appendChild(img);
    })
    .catch(err => console.log(error))
});