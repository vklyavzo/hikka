let request1 = new XMLHttpRequest();
request1.open("GET", "../src/anime.json", true);
request1.responseType = 'json';
request1.send();
request1.onload = function() {
    let data1 = request1.response;
    anime_cards = data1['cards'];
}

let anime_container_f, anime_cards,
    inputs_conteiner = document.querySelectorAll('.select_input'),
    container = document.querySelector('#selected'),
    selectSingle = document.querySelector('#select_sort'),
    selectSingle_title = selectSingle.querySelector('#select_title'),
    selectSingle_labels = selectSingle.querySelectorAll('.select_sort_label'),
    inputs_status,
    reset = document.querySelector('#reset'),
    submit = document.querySelector('#submit'),
    all_anime = document.querySelector('#all_anime'),
    resultSelect = [], inputs_conteiner_checked = [],
    error = document.querySelector('#not_found');


//вставка выбранных жанров в поле для жанров
inputs_conteiner.forEach(el => {
    el.addEventListener('click', function(){
        let result = [];
        container.style.display = 'block';
        inputs_conteiner_checked = document.querySelectorAll('.select_input:checked');
        inputs_conteiner_checked.forEach(el_checked => {
            result.push(el_checked.value);
        });
        container.innerHTML = result.join(', ');
        if(container.innerHTML === ''){
            container.style.display = 'none';
        }
    });  
});

//скрываем кнопки когда выбирают сортировку и показываем список
selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
    reset.style.display = 'inline-block';
    submit.style.display = 'inline-block';
  } else {
    selectSingle.setAttribute('data-state', 'active');
    reset.style.display = 'none';
    submit.style.display = 'none';
  }
});

for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', evt => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
    reset.style.display = 'inline-block';
    submit.style.display = 'inline-block';
  });
}

// сброс выбранных фильтров
reset.addEventListener('click', () => {
  selectSingle_title.textContent = selectSingle_title.getAttribute('data-default');
  error.style.display = 'none';
  all_anime.style.display = 'grid';
  
  inputs_conteiner_checked.forEach(el_checked => {
    el_checked.checked = false;
    container.style.display = 'none';
  });
  inputs_status.checked = false
  
  for(let i = 0; i < anime_container_f.length; i++){
    anime_container_f[i].style.display = 'block'
      }
  });


//фильтрация
submit.addEventListener('click', () =>{
  let genre = container.innerHTML.split(', ');
  inputs_status = document.querySelector('.select_input_status:checked')
  anime_container_f = document.querySelectorAll('.anime_container');
  anime_container_f.forEach(function(item,i){
      let genre_card = item.querySelector(".genre")
  })
    // let genree = anime_cards[i]['genre'].split(', ');
    // let status = anime_cards[i]['status'];
    // let genreArr = genre.filter((elem) => (genree.find((e) => e === elem)));
    

  // if(counter === 0){
  //   error.style.display = 'block';
  //   all_anime.style.display = 'none'
  // }
});
