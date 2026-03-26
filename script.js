let selection=document.querySelectorAll("select");
let input=document.querySelectorAll("input");
let form=document.querySelector("form");
form.addEventListener("submit",(det)=>{
  det.preventDefault();
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
      positionX:selection[0].value,
      positionY:selection[1].value,
      duration:Number(input[0].value),
  });
  toaster(input[1].value);

  form.reset();
  console.log(selection[0].value);
});
