console.log("28) Use Promises to load multiple images asynchronously and display them on a webpage.");

function loadImage(src){
    return new Promise((resolve,reject)=>{
        let img = new Image(500,500);
        img.onload = function(){
            resolve(img);
        };
        img.onerror = function(){
            reject(new Error("Failed to Load Image:"+src));
        }
        img.src = src;
    })
}

let imageContainer = document.getElementById("imageContainer");
let imageUrls=["./images/img1.jpg","./images/img2.jpg","./images/img3.jpg"];

Promise.all(imageUrls.map(loadImage))
.then(image=>{
    image.forEach(image => imageContainer.appendChild(image));
})
.catch(error=>console.log(error))