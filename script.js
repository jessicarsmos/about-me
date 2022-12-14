const itensNav = document.querySelectorAll('.navlist li a');
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const menuOpener = document.querySelector('.menu-opener');
const header = document.querySelector('header');



function typeWriter() {
    const h1Letters = h1.innerText.split('');
    const pLetters = p.innerHTML.split('');
    h1.innerText = '';
    p.innerHTML = '';
    h1Letters.forEach((letter, i) => {
        setTimeout(() => {
            h1.innerHTML += letter;
        }, 75 * i)
    });

    setTimeout(() => {
        pLetters.forEach((l, i) => {
            setTimeout(() => {
                p.innerHTML += l;
            }, 75 * i)
        })
    }, 2000)
}

typeWriter();



itensNav.forEach((link, i) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        if (i === 0) {
            window.scrollTo({
                behavior: 'smooth',
                top: 0
            });
            setTimeout(() => {
                typeWriter();
            }, 1000)
        } else if (i === 1) {
            window.scrollTo({
                behavior: "smooth",
                top: 570
            })
        } else if (i === 2) {
            window.scrollTo({
                behavior: 'smooth',
                top: 1130
            })
        } else {
            window.scrollTo({
                behavior: 'smooth',
                top: 1700
            })
        }
    })
});

window.addEventListener('resize', (e) => {
    console.log('oi');
})

menuOpener.addEventListener('click', (e) => {
    if (menuOpener.style.marginRight === '') {
        menuOpener.style.marginRight = '130px';
    } else {
        menuOpener.style.marginRight = '';
    }

    if (window.innerWidth < 800 && header.style.right === '0px') {
        header.style.right = '-200px';
    } else {
        header.style.right = 0;
    }

})
