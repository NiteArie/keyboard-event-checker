const app = (() => {
    const _titleContainer = document.querySelector('.container__title');
    const _outputContainer = document.querySelector('.container__output');
    const _container = document.querySelector('.container');
    const _charCodeDisplay = document.querySelector('.container__output__char-code');
    const _keyContainer = document.querySelector('.container__output__desc__key');
    const _codeContainer = document.querySelector('.container__output__desc__code');
    const _keyDisplay = document.querySelector('.container__output__desc__key__content');
    const _codeDisplay = document.querySelector('.container__output__desc__code__content');

    document.body.addEventListener('keypress', (event) => {
        hideTitleContainer();
        showOutputContainer();

        renderCharCodeDisplay(event.charCode);
        renderKeyDisplay(event.key);
        renderCodeDisplay(event.code);
    })


    function hideTitleContainer() {
        _titleContainer.classList.add('hidden');
    }

    function showOutputContainer() {
        _outputContainer.classList.remove('hidden');
    }

    function renderCharCodeDisplay(charCode) {
        _charCodeDisplay.textContent = charCode;
    }

    function renderKeyDisplay(key) {
        _keyDisplay.textContent = key;
    }

    function renderCodeDisplay(code) {
        _codeDisplay.textContent = code;
    }
    
})();