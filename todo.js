var ul = document.getElementById('list');
var li;



let add = document.getElementById('b1').addEventListener('click', (getele) =>{

   let input = document.getElementById('input');
   let ie = input.value;
   ul = document.getElementById('list');
   var textnode = document.createTextNode(ie);
   
   if(ie === "")
   {
       return false;
       var para = document.createElement('p');
       para.textContent = 'Add a to-do note';
       document.querySelector('ul').appendChild(para)

       
   }
   else {
       // Create li
       li = document.createElement('li');
       //Create checkbox
       var checkbox = document.createElement("input");
       checkbox.type = 'checkbox';
       checkbox.setAttribute('id','check');
       //create label
       var label = document.createElement('label');

       //add these element to web page

       ul.appendChild(label);
       li.appendChild(checkbox);
       label.appendChild(textnode);
       li.appendChild(label);
       ul.insertBefore(li,ul.childNodes[0]);
       setTimeout(() => {

       },3);

       input.value = " ";
   }

})


let remove = document.getElementById('b2').addEventListener('click', (remele) =>{
    li = ul.children
    for (let i=0 ; i < li.length ; i++){
      while(li[i] && li[i].children[0].checked){
          ul.removeChild(li[i])
              }
  }
 
} )



let removeAll = document.getElementById('b3');
removeAll.addEventListener('click', (removel) => {
    li = ul.children;
    
    for (let i=0 ; i < li.length ; i){
            ul.removeChild(li[i])
                }
} )


    
    
    
// function remele(){
//     li = ul.children
//       for (let i=0 ; i < li.length ; i++){
//         while(li[i] && li[i].children[0].checked){
//             ul.removeChild(li[i])
//                 }
//     }
   
// } 

// function removel(){
//     li = ul.children;
    
//     for (let i=0 ; i < li.length ; i++){
//             ul.removeChild(li[i])
//                 }
// } 