const cl = console.log;

const btn = document.getElementById('btn');
const box = document.getElementById('box');
const box1 = document.getElementById('box1');
const btn2 = document.getElementById('btn2');



const btnShow = () => {


let css =box.className;
cl(css);

  if (css.includes("d-none")) {
    box.classList.remove("d-none");   
  } else {
    box.classList.add("d-none");     
  }
};



const btnShow2 =()=>{
let cs2 =box1.className;
cl(cs2);

if(cs2.includes("d-none")){
box1.classList.remove("d-none");

}else{
  box1.classList.add("d-none");
}


}





btn.addEventListener("click", btnShow);
btn2.addEventListener("click", btnShow2);










// const clickShow = document.getElementById("clickShow");




// const onclickHandler = (ele)=>{
//    let box1 = boxInfo.className;
//    if(box1.includes("d-none")){
//       ele.target.innerHTML = "HideBox";
//       boxInfo.classList.remove("d-none");
//    }else{
//       ele.target.innerHTML = "ShowBox";
//       boxInfo.classList.add("d-none");
//    }
// }


// clickShow.addEventListener("click",onclickHandler )