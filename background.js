const images=[
    "0.png",
    "1.png",
    "2.png",
    "3.png",
    
]
const randomImage=images[Math.floor(Math.random()*images.length)];
const bgImg=document.createElement("img");
bgImg.src=randomImage;

document.body.style.backgroundImage = `url(${bgImg.src})`;

