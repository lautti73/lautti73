const imgC = document.querySelectorAll('.carousel-item > img') ;
const divNav = document.querySelector('nav > div');
const navBar = document.querySelector('.navbar-nav');
const liRemove = document.querySelector('#remove');
const vermasBtn = document.querySelector('#vermasbtn');
let winWidth = window.innerWidth;
let winHeight = window.innerHeight;
let navHeight;


window.addEventListener('load', reSize);
window.addEventListener('resize', reSize);

let imagen1 = basicScroll.create({
    elem: document.querySelector('.segundo-articulo img'),
    from: 'top-bottom',
    to: 'bottom-top',
    props: {
      '--imagen1': {
        from: '0',
        to: '-50%'
      }
    }
  });

window.onresize = function() {

	

}


function reSize() {
    winWidth = window.innerWidth;
    winHeight = window.innerHeight;

    if(winWidth < 421) {
        navHeight = 42.5 + 'px';
    } else if (winWidth < 576) {
        navHeight = 49.25 + 'px';
    } else if (winWidth < 768) {
        navHeight = 52 + 'px';
    } else {
        navHeight = 62 + 'px';
    }

    for(i = 0; i < imgC.length; i++) {
        imgC[i].style.objectFit = 'cover';
        imgC[i].style.height = 'calc(100vh - ' + navHeight + ')';
        imgC[i].style.width = '100%';

    }

    if(winWidth < 993) {
        vermasBtn.setAttribute('disabled', 'true');
        vermasBtn.removeAttribute('enable');
    } else {
        vermasBtn.setAttribute('enable', 'true');
        vermasBtn.removeAttribute('disabled');
    }

    imagen1.calculate()
	imagen1.update()
}

    imagen1.start();



