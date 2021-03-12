const btn = document.querySelector('.button');
const bonus = document.querySelector('.bonus');

btn.addEventListener('click',(event)=>{
    event.preventDefault();
    const array = arrMaker();
    makeTeams(array);
})

function arrMaker(){
    const array = [];
    const form = Array.from(document.querySelector('.form').children);
    for (let item of form) {
        if (item.tagName == 'INPUT' && item.checked){
            array.push(item.getAttribute('id'));
        }
    }
    return array;
}

function makeTeams(array){
    shuffle(array);
    const app = document.querySelector('.app');
    app.innerHTML = '';
    if (array.length % 2 == 1){
        bonus.innerHTML = 'Свободный выбор: ' + array.pop();
    } else {
        bonus.innerHTML = '';
    }
    for (let player of array){
        const newEl = document.createElement('li');
        newEl.setAttribute('class', 'list-item');
        newEl.innerHTML = player;
        app.append(newEl);
    }
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}