const clock = document.getElementById('clock');


setInterval(function(){
    const curr_time =  new Date() ;
    clock.innerHTML =  curr_time.toLocaleTimeString();
},1000) ;