function loadimgs() {

    //alert('loal');

    //document.getElementById('0').src = '0.png';

    // for(int in=0; in<10; in++){
    //     document.getElementById(in+'').src = in+'.png';
    // }


    //var i = 0;
    //while(i <= 6){
    //    var ImageSrc = i + ".png";
    //    console.log(ImageSrc);
    //    document.getElementById('0').src = ImageSrc;
    //    i++;
    //}



    rightdown();
}

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
    if(a<500){
        scrolldelay = setTimeout('leftdown()', 10); // scrolls every 10 milliseconds
    }
    else{
        a=0;
        //location.reload();
        rightup();
    }
}

function rightup()
{
    let c = document.querySelector('#cont');
    c.scrollLeft += 2;

    window.scrollBy(0, -1);
    a++;
    if(a<300)
    {
        scrolldelay = setTimeout('rightup()', 10);
    }
    else{
        a=0;
        location.reload();
        rightdown();
    }
}
