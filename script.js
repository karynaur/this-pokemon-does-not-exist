function loadimgs() {
    for(var i=1; i<201; i++){
        let x = Math.floor(Math.random() * (200 - 1) + 1);
        document.getElementById(i).src = 'Card/' + x + '.png';
    }
    rightdown();
}

var a=0;

function rightdown() {
    let c = document.querySelector('#cont');
    c.scrollLeft += 1;
    window.scrollBy(0, 1);
    a++;
    if(a<600){
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
    c.scrollLeft -= 1;
    window.scrollBy(0, 1); 
    a++;
    if(a<400){
        scrolldelay = setTimeout('leftdown()', 10); // scrolls every 10 milliseconds
    }
    else{
        a=0;
        rightup();
    }
}

function rightup()
{
    let c = document.querySelector('#cont');
    c.scrollLeft += 1;

    window.scrollBy(0, -1);
    a++;
    if(a<500)
    {
        scrolldelay = setTimeout('rightup()', 10);
    }
    else{
        a=0;
        up();
    }
}

function up()
{
    window.scrollBy(0, -1);
    a++;
    if(a<400)
    {
        scrolldelay = setTimeout('up()', 10);
    }
    else{
        a=0;
        rightdown();
    }
}

function image(img) {
    var src = img.src;
    window.open(src);
}