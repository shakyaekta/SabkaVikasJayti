let a = "बीज बितरण योजना";
let b = "बाल शिक्षा योजना";
let c = "पशुधन योजना";
let d = "वर्मी कम्पोस्ट रोजगार योजना";
let e = "किसान मशीनरी योजना";
let f = "Brain Tech Group";
setTimeout(container1,4598);

function container1(){
    let text = document.getElementById('text').innerText;
    if(text == a)
        {
            document.getElementById('text').innerHTML = text.replace(a,b);
            document.getElementById('incircle').style.backgroundImage = "url(image/book.jpg)";
        }
    else if(text == b)
    {
        document.getElementById('text').innerHTML = text.replace(b,c);
        document.getElementById('incircle').style.backgroundImage = "url(image/cows.jpg)";
    }
    else if(text == c)
    {
        document.getElementById('text').innerHTML = text.replace(c,d);
        document.getElementById('incircle').style.backgroundImage = "url(image/compost.jpg)";
    }
    else if(text == d)
    {
        document.getElementById('text').innerHTML = text.replace(d,e);
        document.getElementById('incircle').style.backgroundImage = "url(image/machine.jpg)";
    }
    else if(text == e)
    {
        document.getElementById('text').innerHTML = text.replace(e,f);
        document.getElementById('incircle').style.backgroundImage = "url(image/brainTech.jpg)";
    }
    else if(text == f)
    {
        document.getElementById('text').innerHTML = text.replace(f,a);
        document.getElementById('incircle').style.backgroundImage = "url(image/images.jpeg)";
    }
    setTimeout(container1,4598);
}
