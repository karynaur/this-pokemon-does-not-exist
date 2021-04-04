/*function name() {
    var obj = document.getElementById("")
    
}*/

var a=0;

function rightdown() {
    let c = document.querySelector('#cont');
    c.scrollLeft += 2;
    window.scrollBy(0, 1); 

    a++;
    if(a<700){
        scrolldelay = setTimeout('rightdown()', 10); // scrolls every 10 milliseconds
    }
    else{
        a=0;
        leftdown();
    }   
    
}

function leftdown(){
    
    // alert('ini');
    let c = document.querySelector('#cont');
    c.scrollLeft -= 2;
    window.scrollBy(0, 1); 
    a++;
    if(a<700){
        scrolldelay = setTimeout('leftdown()', 10); // scrolls every 10 milliseconds
    }
    else{
        a=0;
        rightdown();
    }
    //scrolldelay = setTimeout('right()', 10); // scrolls every 100 milliseconds
}
