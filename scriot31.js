console.log("31) ")

function createImageElement(src){
    let img= document.createElement("img");
    img.src = src;
    return img;
}


let gallery = document.getElementById("gallery");
let imageUrls=["./images/img1.jpg","./images/img2.jpg","./images/img3.jpg"];

imageUrls.forEach(url => gallery.appendChild(createImageElement(url)));