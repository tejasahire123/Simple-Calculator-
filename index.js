let scren=document.querySelector("input");
// console.log(scren)

let all_bt=document.querySelectorAll("button");
console.log(all_bt)
let convert_all_bt_array=Array.from(all_bt);


// *store in the string 
let store_string="";
convert_all_bt_array.forEach(btnn=>{
 btnn.addEventListener("click",(e)=>{
  

    if(e.target.innerHTML=='del'){
        store_string=store_string.substring(0,store_string.length-1);
        scren.value=store_string
    }
    else if(e.target.innerHTML=='ac'){
        store_string="";
        scren.value=store_string;
    }
    else if(e.target.innerHTML=='='){
        store_string=eval(store_string);
        scren.value=store_string
    }
    else{
        
        store_string+=btnn.innerHTML;
        scren.value=store_string
        scren.style.color="black"
        scren.style.fontSize="20px"
        scren.style.fontWeight="600"

    }
 })
});