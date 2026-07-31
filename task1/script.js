const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let currentIndex = 0;

images.forEach((img,index)=>{
    img.addEventListener("click",()=>{
        currentIndex=index;
        showImage();
        lightbox.style.display="flex";
    });
});

function showImage(){
    lightboxImg.src=images[currentIndex].src;
}

nextBtn.addEventListener("click",()=>{
    currentIndex=(currentIndex+1)%images.length;
    showImage();
});

prevBtn.addEventListener("click",()=>{
    currentIndex=(currentIndex-1+images.length)%images.length;
    showImage();
});

closeBtn.addEventListener("click",()=>{
    lightbox.style.display="none";
});

function filterImages(category){
    const allImages=document.querySelectorAll(".image");

    allImages.forEach(img=>{
        if(category==="all" || img.classList.contains(category)){
            img.style.display="block";
        }
        else{
            img.style.display="none";
        }
    });

    document.querySelectorAll(".filter-buttons button")
    .forEach(btn=>btn.classList.remove("active"));

    event.target.classList.add("active");
}