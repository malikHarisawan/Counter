let count = 0 ;

let value = document.getElementById("value");

let btns = document.querySelectorAll(".btn");

btns.forEach(function (btn){

    btn.addEventListener("click",function (e) {
    
        let style=(e.currentTarget.classList);

        if(style.contains("decrease")){

        count--;
        

        }
        
        else if(style.contains("increase")){

            count++;
           
        }
        else 
        {

            count=0;;
           
        }
        value.innerText=count;

        if(count>0){
            value.style.color="green";
        }
        if(count<0){
            value.style.color="red";
        }
        if(count==0){
            value.style.color="#222";
        }
    });

});

