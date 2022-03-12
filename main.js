let index ;
function displayImage(){
    let images = ["http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg", "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg","http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg" ]
    document.getElementById("picha").classList.remove(`img${parseInt(index)+1}`)
    index = document.getElementById("images").value
    let selectedImage = images[index]
    
    console.log(document.getElementById("picha").classList.add(`img${parseInt(index)+1}`))
    document.getElementById("picha").setAttribute("src", selectedImage)
    
    

}
