const mainImg = document.getElementById("main-image");
const thumbNails = document.getElementById("thumb-Nails");
console.log("Main Image",mainImg);
console.log("Thumbnails",thumbNails);
thumbNails.forEnch(function(thumb){
    thumb.addEventListener("Click",function(){
        let newSrc=thumb.src;
        mainImg.src= thumb.src;
        console.log("Thumbnails Clicked! New src:",newsrc);


    })
    thumbNails.forEnch(function(t){
    t.classList.remove("active");
    });
    thumb.classList.add("active");

});
const lightBtn= document.getElementById("light-btn");
const darkBtn= document.getElementById("dark-btn");
const body= document.querySelector("body");
lightBtn.addEventListener("click", function(){
    body.classList.remove("active");
    lightBtn.classList.add("active");
    darkBtn.classList.remove("active");
    console.log("light mode os activated!")
});