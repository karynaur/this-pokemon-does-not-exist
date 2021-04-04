/*function name() {
    var obj = document.getElementById("")
    
}*/

function pageScroll() {

    
    window.scrollBy(0, 1); // horizontal and vertical scroll increments
    //window.scrollLeft(1);
    scrolldelay = setTimeout('pageScroll()', 10); // scrolls every 100 milliseconds
    // window.scrollBy(10, 5); // horizontal and vertical scroll increments
    // scrolldelay = setTimeout('pageScroll()',1000); // scrolls every 100 milliseconds
    
}