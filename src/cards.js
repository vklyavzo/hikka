let request = new XMLHttpRequest();
request.open("GET", "../src/anime.json", true);
request.responseType = 'json';
request.send();
request.onload = function() {
    let data = request.response;
    addAnime(data)
}

let anime_container =  document.querySelector('#all_anime');
function addAnime(jsonObj){
    let cards = jsonObj["cards"];
    for (var i = 0; i < cards.length; i++) {
        let card_container = document.createElement('div');
        card_container.classList.add('anime_container')
        card_container.innerHTML = `
        <img src="${cards[i]['image']}">
        <a href="#">
            <div class="anime_text">
            <div class="heading">${cards[i]['heading']}</div>
            <div class="genre">Жанры: <span>${cards[i]['genre']}</span></div>
            <div class="year">Год выпуска: <span>${cards[i]['year']}</span></div>
            <div class="status">Статус: <span>${cards[i]['status']}</span></div>
            <div class="age_rating">Возрастной рейтинг: <span>${cards[i]['age_rating']}</span></div>
            <div class="about">
                ${cards[i]['about']}
            </div>
            <div class="rating">
                <div class="views"><i class="far fa-eye"></i><span>200012</span></div>
                <div class="like"><i class="far fa-thumbs-up"></i><span>10334</span></div>
                <div class="dislike"><i class="far fa-thumbs-down"></i><span>29</span></div>
            </div>
            </div>
        </a>`
        anime_container.append(card_container);
    }
}
