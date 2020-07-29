(() => {

const main = document.querySelector('[data-main]');

// pjax-style loading of sections
document.querySelectorAll('[data-nav]').forEach(element => {
    element.onclick = (e) => {
        e.preventDefault();
        fetch(element.href)
            .then(res => res.text())
            .then(text => main.innerHTML = text); 
    };

    // Load 'about' page by default
    if (element.getAttribute('data-nav-index') !== null) element.click();

});

// simple templating using template literals
const template = (name, obj) => {
    fetch(name + '.tmpl')
        .then(str => {
            console.log(str);
        });
}

})();
