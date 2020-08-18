(() => {

const main = document.querySelector('[data-main]');

// pjax-style loading of sections
document.querySelectorAll('[data-nav]').forEach(element => {
    element.onclick = (e) => {
        e.preventDefault();
        fetch(element.href)
            .then(res => res.text())
            .then(text => main.innerHTML = text)
            .then(() => {
                if (element.href.includes('exhibits')) loadExhibits();
            });
       
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

// exhibit-specific stuff 
const exhibits = [
    {
        name: 'Paula Te',
        form: 'Shibori',
        statement: `
            <p>
            "I explored a set of ideas around digital fabrication and dyeing, the former which I am very familiar with and the latter which I am not. I ended up with many explorations into how laser cut objects could function as resists (known in Japanese as itajime shibori)."
            </p>
            <a href="https://www.notion.so/Oregon-Mini-Artist-Residency-77584e04fa3845138a10e70d2fdc4645">Additional Documentation</a>
        `,
        url: '5gct71l8hm'
    },
];

/*
{
    name: 'Yasaman Sheri',
    form: 'AI Botany',
    statement: 'neat',
    url: '5gct71l8hm'
},
{
    name: 'Ken Kinoshita & Erica Dorn',
    form: 'Illustrated Children\'s Book',
    statement: '',
    url: '5gct71l8hm'
},
*/

// Exhibit functionality
function loadExhibits() {
    const menu = document.getElementById('menu');
    const ul = document.getElementById('exhibits');
    const container = document.getElementById('exhibit');

    exhibits.forEach(({ name, form, statement, url }) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.innerText = `${name} - ${form}`
        a.onclick = e => {
            menu.style.maxHeight = 0;
            container.innerHTML = `
                <h2>${name} - ${form}</h2>
                <p>${statement}</p>
                <iframe src="https://photodump-app.wn.r.appspot.com/#${url}!light!silent!horizontal" class="photos"></iframe>
            `;
        };
        li.appendChild(a);
        ul.appendChild(li);
    });

    document.querySelectorAll('.exhibits a').forEach(d => {
        console.log(d);
    });
}

})();
