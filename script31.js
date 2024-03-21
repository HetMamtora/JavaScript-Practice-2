console.log("31) Create an image gallery using dynamically generated elements.")

function createImageElement(src){
    let img= document.createElement("img");
    img.src = src;
    return img;
}


let gallery = document.getElementById("gallery");
let imageURLS=["./images/img1.jpg","./images/img2.jpg","./images/img3.jpg"];

imageURLS.forEach(url => gallery.appendChild(createImageElement(url)));