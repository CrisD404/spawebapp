const navEffect = () => {
    document.getElementsByTagName('html')[0].classList.remove('unload')
    document.getElementsByTagName('html')[0].classList.add('load')
    setTimeout(()=>{
        document.getElementsByTagName('html')[0].classList.remove('load')
        document.getElementsByTagName('html')[0].classList.add('unload')
    },300)
}

const go = p => {
    location.hash = p;
    navEffect()
    app.nav(p);
}

if (content.querySelector('script')) {
    let scr = content.querySelector('script').innerHTML;
    eval(scr);
}

var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (mutation.type == "attributes" && mutation.attributeName == "view") {
            /* console.log(content) */
            setTimeout(() => {
                if (content.querySelector('script')) {
                    let scr = content.querySelector('script').innerHTML;
                    eval(scr);
                }
            }, 0)
        }
    });
});

observer.observe(content, {
    attributes: true
});

content.addEventListener('DOMAttrModified', () => {

    console.log('asd')


})