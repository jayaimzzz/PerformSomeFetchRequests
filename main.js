let dest = document.getElementById('mainWrapper')

function displayOnPage(text) {
    let t = document.createTextNode(text);
    let span = document.createElement('span');
    let br = document.createElement('br');
    span.appendChild(t);
    dest.appendChild(span);
    dest.appendChild(br)
}

function randomWholeNumber(max) {
    return Math.floor(Math.random() * max);
}

fetch('http://jservice.io/api/category?id=25')
.then(res => res.json())
.then(data => {
    let randomClue = data.clues[randomWholeNumber(data.clues_count)];
    let question = randomClue.question
    let answer = randomClue.answer
    displayOnPage(`Your first category is ${data.title}. Clue: ${question}. Answer: ${answer}.`)
})

async function showCategoryAndRandomQuestion(){
    let res = await fetch('http://jservice.io/api/category?id=420')
    let category = await res.json()
    let randomClue = category.clues[randomWholeNumber(category.clues_count)]

    displayOnPage(`Your second category is everyone's favorite, ${category.title}. Clue, ${randomClue.question}. Answer: ${randomClue.answer} `)
}

showCategoryAndRandomQuestion();