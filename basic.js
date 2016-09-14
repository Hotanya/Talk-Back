var input = document.querySelector('#clear');
var textarea = document.querySelector('#textarea');

input.addEventListener('click', function () {
    textarea.value = '';
}, false);