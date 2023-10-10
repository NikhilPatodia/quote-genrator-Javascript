console.log("app is ready to use");

let para = document.getElementsByClassName("para")

function getData(){
  const url = "https://type.fit/api/quotes";
  fetch(url).then((response)=>{
     console.log("this is first then");
     return response.json();
  }).then((data)=>{
    console.log("this is a second then ");
   
    for(keys in data){
      console.log(keys)
        // console.log(data[keys]["text"])
       para[keys].innerHTML = data[keys]["text"];
    }
  })
}

getData();

let btn = document.getElementById("btn");
let quotes = document.getElementById('quotes');
btn.addEventListener('click', ()=>{

  btn.innerHTML = '';
 

    btn.insertAdjacentHTML('afterbegin', '<img src="loading.gif" class="h-[40px] w-[40px]" alt="" srcset="">')
  
    
  setTimeout(() => {
    btn.innerHTML = 'Genrate quotes for friendship';
    quotes.classList.remove("invisible");
   
  }, 1000);

})
console.log(btn)