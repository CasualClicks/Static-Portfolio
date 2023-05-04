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

/* Adding JS for Body items - both cursor size and image */

let links_body = document.querySelectorAll('.link-item');
let links_img = document.querySelectorAll('.hover-reveal_img');

links_body.forEach((link_body, idx) => {

    link_body.addEventListener('mousemove', (e) => {
        link_body.children[1].style.opacity = 1;
        link_body.children[0].style.zIndex = 3;
        link_body.children[1].style.transform = `translate(${e.clientX-150}px, -${e.clientY / 3}px) rotate(${e.clientX / 50}deg)`
        links_img[idx].style.transform = 'scale(1,1)'
        link_body.style.zIndex = 2;
        
    })

    link_body.addEventListener('mouseleave', (e) => {
        link_body.children[1].style.opacity = 0;
        link_body.children[1].style.transform = `ztranslate(${-e.clientX}px, -300px)`
        links_img[idx].style.transform = 'scale(0,0.8,0.8)'
        link_body.style.zIndex = 0;
    })
})
