// setting initial count
let counter=0;

//select buttons
const button =document.querySelectorAll(".btn");

const value = document.querySelector("#value");

button.forEach(btn => {

    btn.addEventListener("click", (e)=>{

       // console.log(e.currentTarget.classList);

        const style= e.currentTarget.classList;

        if(style[1]=="decrease"){
            counter--;
        }
        else if(style[1] == "increase"){
            counter++;
        }
        else{
            counter=0;
        }
        
        value.textContent = counter;
    });
    
    
});
