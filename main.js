let dest = document.getElementById('mainWrapper')

function displayOnPage(text) {
    let t = document.createTextNode(text);
    let span = document.createElement('span');
    span.appendChild(t);
    dest.appendChild(span);
}

function randomWholeNumber(max) {
    return Math.floor(Math.random() * max);
}

fetch('http://jservice.io/api/category?id=25')
    .then(res => res.json())
    .then(data => {
        let randomCategory = data.clues[randomWholeNumber(240)];
        let question = randomCategory.question
        displayOnPage(`Your first category is ${data.title}. Clue: ${question}.`)
    })