function createtoaster(config){
 return function(text){
 let div=document.createElement("div");
 let notifications=document.querySelector(".notifications");
 div.classList.add("notification");
 div.textContent=text;
notifications.classList.remove("left", "right", "top", "bottom");

notifications.classList.add(
  config.positionX === "right" ? "right" : "left",
  config.positionY === "top" ? "top" : "bottom"
);
notifications.appendChild(div)
 setTimeout(()=>{
notifications.removeChild(div);
 },config.duration*1000);

}
};

let toaster = createtoaster({
    positionX:"left",
    positionY:"top",
    duration:3,
});
toaster("Hello");
toaster("Hello");