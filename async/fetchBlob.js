const getImage = async (url) => { //get image
    await fetch(url)
        .then(response => countryImage.src = URL.createObjectURL(response.blob()))
        .catch(err => console.log(err))
}; 
