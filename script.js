let hamburgerMenu = document.querySelector('.hamburger-menu');
hamburgerMenu.addEventListener('click', toggle);

function toggle() {
  if (hamburgerMenu.classList.contains('open')) {
    hamburgerMenu.classList.remove('open');
  } else {
    hamburgerMenu.classList.add('open');
  }
}

var str = 'Я продолжаю разработку. Контакты: discord: @svk-man';
var style = ['padding: 1rem;',
  'background: linear-gradient( gold, orangered);',
  'text-shadow: 0 2px orangered;',
  'font: 1.3rem/3 Georgia;',
  'color: white;'].join('');

/* console messages start */
console.log('%cПервый пункт. вёрстка валидная +10', 'font-size: 16px');
console.log('Для проверки валидности вёрстки используйте сервис https://validator.w3.org/');
console.log('Надпись "Document checking completed. No errors or warnings to show." +10');
console.log('%cНе выполнено - 0 баллов', 'color: red; font-size: 12px');
console.log('%cИтого - 0/10 баллов', 'color: red; font-size: 16px');
console.log('');

console.log('%cВторой пункт. вёрстка семантическая +20', 'font-size: 16px');
console.log('В коде страницы присутствуют семантические теги HTML5, например, article, aside, figure, figcaption, footer, header, main, nav, section, используются заголовки h1-h6. Заголовок h1 может быть только один.');
console.log('2 балла за каждый уникальный семантический тег HTML5 и за каждый уникальный заголовок h1-h6, но не больше 20 баллов');
console.log('%cНе выполнено - 0 баллов', 'color: red; font-size: 12px');
console.log('%cИтого - 0/20 баллов', 'color: red; font-size: 16px');
console.log('');

console.log('%cТретий пункт. для оформления СV используются css-стили +10', 'font-size: 16px');
console.log('1 балл за каждый стилизованный элемент, но не больше 10 баллов');
console.log('%cВыполнено - 10 баллов', 'color: green; font-size: 12px');
console.log('%cИтого - 10/10 баллов', 'color: green; font-size: 16px');
console.log('');

console.log('%cЧетвертый пункт. контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы +10', 'font-size: 16px');
console.log('%cВыполнено - 10 баллов', 'color: green; font-size: 12px');
console.log('%cИтого - 10/10 баллов', 'color: green; font-size: 16px');
console.log('');

console.log('%cПятый пункт. вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется +10', 'font-size: 16px');
console.log('%cВыполнено - 10 баллов', 'color: green; font-size: 12px');
console.log('%cИтого - 10/10 баллов', 'color: green; font-size: 16px');
console.log('');

console.log('%cШестой пункт. есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным. Внешний вид адаптивного меню можно скопировать с макета музея +10', 'font-size: 16px');
console.log('%cНе выполнено - 10 баллов', 'color: red; font-size: 12px');
console.log('%cИтого - 0/10 баллов', 'color: red; font-size: 16px');
console.log('');

console.log('%cСедьмой пункт. на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым) +10', 'font-size: 16px');
console.log('%cВыполнено - 10 баллов', 'color: green; font-size: 12px');
console.log('%cИтого - 10/10 баллов', 'color: green; font-size: 16px');
console.log('');

console.log('%cВосьмой пункт. контакты для связи и перечень навыков оформлены в виде списка ul > li +10', 'font-size: 16px');
console.log('%cВыполнено - 10 баллов', 'color: green; font-size: 12px');
console.log('%cИтого - 10/10 баллов', 'color: green; font-size: 16px');
console.log('');

console.log('%cДевятый пункт. CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10', 'font-size: 16px');
console.log('%cНе выполнено - 10 баллов', 'color: red; font-size: 12px');
console.log('%cИтого - 0/10 баллов', 'color: red; font-size: 16px');
console.log('');

console.log('%cДесятый пункт. CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода. Для подсветки кода может использоваться js-библиотека, например, highlight.js +10', 'font-size: 16px');
console.log('%cНе выполнено - 10 баллов', 'color: red; font-size: 12px');
console.log('%cИтого - 0/10 баллов', 'color: red; font-size: 16px');
console.log('');

console.log('%cОдинадцатый пункт. CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий. +10', 'font-size: 16px');
console.log('%cНе выполнено - 10 баллов', 'color: red; font-size: 12px');
console.log('%cИтого - 0/10 баллов', 'color: red; font-size: 16px');
console.log('');

console.log('%cДвенадцатый пункт. CV выполнено на английском языке +10', 'font-size: 16px');
console.log('%cВыполнено - 10 баллов', 'color: green; font-size: 12px');
console.log('%cИтого - 10/10 баллов', 'color: green; font-size: 16px');
console.log('');

console.log('%cТринадцатый пункт. выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт) +10 Вниманию проверяющих. Так как сабмитится ссылка на деплой CV, вам необходимо будет самостоятельно найти Pull Request для проверки. Для этого по ссылке в футере перейдите на гитхаб автора CV, найдите там репозиторий rsschool-cv, в нём открытый PR из ветки cv-html-css в ветку main с названием CV и проверьте его описание.', 'font-size: 16px');
console.log('%cНе выполнено - 0 баллов', 'color: red; font-size: 12px');
console.log('%cИтого - 0/10 баллов', 'color: red; font-size: 16px');
console.log('');

console.log('%cЧетырнадцатый пункт. есть видеорезюме автора CV на английском языке. Видеорезюме встраивается в страницу CV как видео, а не в виде кнопки или ссылки. Продолжительность видео 3-5 минут (±15 секунд). В описание видео на YouTube добавлена ссылка на его транскрипцию на английском языке (например, в документе Google Docs). +10 Вниманию авторов работы. Убедитесь, что видео проигрывается и ссылка на транскрипцию открывается в режиме инкогнито браузера.', 'font-size: 16px');
console.log('%cНе выполнено - 0 баллов', 'color: red; font-size: 12px');
console.log('%cИтого - 0/10 баллов', 'color: red; font-size: 16px');
console.log('');

console.log('%cПятнадцатый пункт. дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию (это дополнительные 10 баллов, поэтому некоторый субъективизм в оценке может присутствовать) +10', 'font-size: 16px');
console.log('%cВыполнено - 10 баллов', 'color: green; font-size: 12px');
console.log('%cИтого - 10/10 баллов', 'color: green; font-size: 16px');