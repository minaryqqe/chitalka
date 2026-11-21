const texts = document.querySelectorAll('.text');
const fontSelect = document.querySelector('#fontSelect');
const fontSize = document.querySelector('#fontSize');
const fontColor = document.querySelector('#fontColor');
const lineSpacing = document.querySelector('#lineSpacing');
const bgLabels = document.querySelectorAll('.settings__background-color-label');

fontSelect.oninput = function () {
    texts.forEach(function (text) {
        text.style.fontFamily = fontSelect.value;
    });
};

fontSize.oninput = function () {
    texts.forEach(function (text) {
        text.style.fontSize = fontSize.value + 'px';
    });
};

fontColor.oninput = function () {
    texts.forEach(function (text) {
        text.style.color = fontColor.value;
    });
};

lineSpacing.oninput = function () {
    texts.forEach(function (text) {
        text.style.lineHeight = lineSpacing.value + '%';
    });
};
bgLabels.forEach(function (label) {
    label.onclick = function () {
        const color = window.getComputedStyle(label).backgroundColor;
        document.body.style.backgroundColor = color;
    };
});

function togglePopup() {
    document.querySelector('#popup').classList.toggle('show');
}
