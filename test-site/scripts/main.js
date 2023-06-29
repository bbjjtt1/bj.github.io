// update the title
// let myHeading = document.querySelector('h2')
// myHeading.textContent = 'Hello World!'

// image exchange
let myImage = document.querySelector('img');

myImage.addEventListener('click',() =>{
  let theStr = myImage.getAttribute('src');
  if(theStr === 'images/yjs1.jpg'){
      myImage.setAttribute('src','images/yjs.png');
  }else{
      myImage.setAttribute('src','images/yjs1.jpg')
  }
});

let btn = document.querySelector('button');
let myHeading = document.querySelector('h2');

// userName exchange function
// function setUser(){
//   let name = prompt("请输入您的姓名：");
//   if(!name){
//     setUser();
//   }else{
//     localStorage.setItem('myName',name);
//     myHeading.textContent = 'Hi 缘结神' ;
//   }
// }

// fill in UserName
function setUser(){
  let myName = prompt("请输入您的名字");
  if(!myName){
    setUser();
  }else{
    localStorage.setItem("name",myName);
    myHeading.textContent = "Hi，" + myName;
  }
}
// 
if(!localStorage.getItem("name")){
  setUser();
}else{
  let name = localStorage.getItem("name");
  myHeading.textContent = "Yeah" + name;
}

btn.onclick = ()=>{
  setUser();
}


// btn.addEventListener('click',()=> {
//   let isName = localStorage.getItem('myName');
//   if(!isName){
//     setUser();
//   }else{
//     myHeading.textContent = '缘结神，Yeah' + isName;

//   }
// })