let innerCursor = document.querySelector('.inner-cursor');
let outerCursor = document.querySelector('.outer-cursor');   

let image_box = document.querySelector('.image-cursor');

document.addEventListener('mousemove', moveCursor);

function moveCursor(event)
{
    let x = event.clientX;
    let y = event.clientY;

    // console.log(x,y);


    innerCursor.style.left = x + 'px';
    innerCursor.style.top = y + 'px';
    outerCursor.style.left = x + 'px';
    outerCursor.style.top = y + 'px';

}

let links = Array.from(document.querySelectorAll(".nav-items"));

links.forEach((link) => 
{
    link.addEventListener('mouseover', () =>
    {
        innerCursor.classList.add('grow');
    });

    link.addEventListener('mouseleave', ()=>
    {
        innerCursor.classList.remove('grow');
    });

}); 