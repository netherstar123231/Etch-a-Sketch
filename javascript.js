window.document.addEventListener("DOMContentLoaded" ,()=>{

    let choose = document.querySelector(".choose");
    let main = document.querySelector(".main");
    let draw = document.querySelector(".draw");
    let erase = document.querySelector(".erase")
    let restart = document.querySelector(".restart")
    
    choose.addEventListener("click" , ()=>{
    
    main.replaceChildren();
    let size = prompt("Choose Size of Grid")
    
    
    if(typeof Number(size) != "number" || size < 0){
        alert("Error! Not a Valid Grid Size.");
        return;
    }
    else if(size > 100)
    {
        alert("Error! Max Size is 100.");
        return;
    }

    
    
    for(let i = 0; i < size ; i++)
    {
        let divColumn = document.createElement("div");
        
        for(let j = 0 ; j <size ; j++)
        {
            let divRow = document.createElement("div");
            divRow.classList.add("boxes")
            divColumn.appendChild(divRow);
        }
        main.appendChild(divColumn); 
    }
    
   
    let child = document.querySelectorAll(".boxes");

    

    
    draw.addEventListener("click",()=>{

        child.forEach((box)=>{
            box.addEventListener("mouseenter",()=>{
                box.style.cssText = "background-color:black;";
            });
        });
    });

    erase.addEventListener("click",()=>{

        child.forEach((box)=>{
        
            box.addEventListener("mouseenter",()=>{
                box.style.cssText = "background-color:white;";
            });
        });
    });

    restart.addEventListener("click",()=>{

        child.forEach((boxes)=>{
            boxes.style.cssText = "background-color:white;";
        });
    
    });


    });

   

})