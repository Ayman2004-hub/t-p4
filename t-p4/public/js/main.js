console.log('Main loaded');

const cardRow = document.querySelector('.card-container');

fetch('/topics')
    .then(data => data.json())
    .then(jsonData => showtopics(jsonData));

function showtopics(topics){
    console.log(topics);
    let htmlCode = '';
    for (let i = 0; i < topics.length; i++) {
        const icecream = topics[i];
        htmlCode += createCard(icecream);
    }
    cardRow.innerHTML = htmlCode;
}

function createCard(icecream){
    const card = `
        <div class="col-md-3">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">${icecream.icecream}</h4>
                    <p class="card-text">${icecream.description}</p>
                    <p class="card-text">€ ${icecream.price}</p>
                </div>
            </div>
        </div>`;
    return card;
}
