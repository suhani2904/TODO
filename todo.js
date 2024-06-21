const items= document.querySelector('.input');
const todo = document.querySelector("#todo-box");
let arr = [];
items.addEventListener("keyup", (event) => {
  if(event.key === "Enter"){
    arr.push(items.value);
    additems(items.value);
    items.value = "";
  }
})

function additems(value){
  const listitem = document.createElement("li");
  listitem.innerHTML =  `
            
              ${value}
              <i class="trash fas fa-times"></i>
          `
          
          listitem.addEventListener('click' , () =>{
            listitem.classList.toggle("done");
          })
          listitem.querySelector('.trash')
          .addEventListener('click' , ()=>{
            remove(value);
            save();
            listitem.remove();
          })
          save();
todo.appendChild(listitem) ;
}
function remove(value){
  let newarr = [];
  arr.forEach((data) =>{
    if(data != value){
      newarr.push(data);
    }
  });
  arr = newarr;
  save();
}
function save(){
  localStorage.setItem("data" , JSON.stringify(arr));
};
(
  function()
{
  const data = JSON.parse(localStorage.getItem("data"));
  if(data.length != 0){
    data.forEach((value) =>{
      additems(value);
    })
  }
})()
