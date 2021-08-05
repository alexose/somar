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
    {
        name: 'Erica Dorn',
        form: 'Children\'s Book',
        statement: `
            <p>
                "At SOMAR I worked on my second childrens book, a story about a Sprite (fairy-human), named Ryuka that keeps a pet cemetery until the cemetery itself dies and Ryuka is left to create an entirely new universe. Alex and Maluhia were incredible hosts and the inspiring and restorative setting at SOMAR invited us into a relaxed and focused artistic process. I felt so fulfilled by everything I walked away with, from starting my project and making great progress on it, connecting with my artistic process, finding moments of connection to myself and nature, and feeling the gratitude of generous hospitality from the hosts."
            </p>
        `,
        url: 'odz8cbt2xp'
    },
    {
        name: 'Ken Kinoshita',
        form: 'Color',
        statement: `
            <p>
                "My work consisted on a series of studies that capture the true color that defines the local, changing landscape. Challenging the post industrial bias that assumes color as an infinitely repeatable and consistent medium, I instead captured one color by layering different hues while being mindful how each dominated and blended with each other. The resulting aggregate recreated my observations that in nature there is no such thing as a uniform surface or color. Three sets of color studies culminated in one semi-figurative landscape drawing that applies the field observations into an image.'
            </p>
        `,
        url: 'hffmpwu2i0'
    },
    {
        name: 'Yasaman Sheri',
        form: 'AI Botany',
        statement: `
            <p>
                Yasaman explored generative botany with an AI trained on the native species around the property.
            </p>
        `,
    },
    {
        name: 'Sylvia Tan',
        form: 'Ghanian Textiles',
        statement: `
            <p>
                "The Kente Collaborative is a consortium of Ghana-based artisans and a DC-based designer.  Vintage, hand-woven West African textiles (e.g., Ashanti and Ewe kente and Yoruba aso oke) are reworked into the creation of personal accessories that are at once functional and beautiful."
            </p>
        `,
    },
    {
        name: 'Denise Wang',
        form: 'Origami',
        statement: `
            <p>

            </p>
        `,
    },
];


// Exhibit functionality
function loadExhibits() {
    const menu = document.getElementById('menu');
    const ul = document.getElementById('exhibits');
    const container = document.getElementById('exhibit');
    container.style.display = "none";

    exhibits.forEach(({ name, form, statement, url }) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.innerText = `${name} - ${form}`
        a.onclick = e => {
            // TODO: update url
            container.style.display = "flex";

            menu.style.maxHeight = 0;
            container.innerHTML = `
                <div class="container">
                    <a class="back" style="display: block; padding: 15px 0px" onclick="goBack()">&laquo; Back</a>
                    <h2>${name} - ${form}</h2>
                    <p>${statement}</p>
                </div>
            `;

            if (url) {
                container.innerHTML += `<iframe src="https://photodump-app-wmp3ybs6ua-uw.a.run.app/#${url}!light!silent!horizontal" class="photos"></iframe>`
            }

            window.goBack = function(e){
                // TODO: update url
                menu.style.maxHeight = "none";
                container.style.display = "none";
            }
        };
        li.appendChild(a);
        ul.appendChild(li);
    });
}

})();
