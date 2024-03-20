console.log("29) Rewrite the previous (Script28) exercise using async/await.");

async function loadImage1(src){
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

async function loadImages1(){
    let imageContainer = document.getElementById("imageContainer1");
    let imageUrls=["./images/img1.jpg","./images/img2.jpg","./images/img3.jpg"];
    try{
        const images = await Promise.all(imageUrls.map(loadImage1));
        images.forEach(image => imageContainer.appendChild(image));
    }
    catch(error){
        console.error(error)
    }
}

loadImages1()