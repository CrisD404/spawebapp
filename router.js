class Router {

    constructor(PATHS) {
        this.PATHS = PATHS;
        this.initNav()
    }

    initNav() {
        let hash = location.hash
            .substr(1)
            .toLowerCase() || '/';

        if (this.PATHS[hash]) {
            this.nav(PATHS[hash]);
        } else {
            location.hash = '404'
            fetch('404.html')
            .then(r => r.text())
            .then(v => this.render(v));
            setTimeout( () => {content.setAttribute('view', '404')}, 100)
        }

    }

    nav(view) {
        fetch(`views/${view}.htm`)
            .then(r => {
                if (!r.ok) {
                    throw 404;
                } else {
                    setTimeout(()=>{content.setAttribute('view', view)},100)
                    return r.text();
                }
            })
            .then(v  => this.render(v))
            .catch(e => {
                if(e == 404) {
                    location.hash = '404';
                    setTimeout( () => {content.setAttribute('view', '404')}, 100);
                    fetch('404.html')
                    .then(r => r.text())
                    .then(v => this.render(v));
                } 
            });
    }

    render(view) {
        document.getElementById('content').innerHTML = view;
    }

}

const PATHS = {
    '/': 'home',
    'home': 'home',
    'contacto': 'contacto',
    'test': 'test'
}

let content = document.getElementById('content');
const app = new Router(PATHS);