const app = (() => {
    const _titleContainer = document.querySelector('.container__title');
    const _outputContainer = document.querySelector('.container__output');
    const _charCodeDisplay = document.querySelector('.container__output__char-code');
    const _keyContainer = document.querySelector('.container__output__desc__key');
    const _codeContainer = document.querySelector('.container__output__desc__code');
    const _keyDisplay = document.querySelector('.container__output__desc__key__content');
    const _codeDisplay = document.querySelector('.container__output__desc__code__content');
    const _alertContainer = document.querySelector('.container__alerts');

    document.body.addEventListener('keypress', (event) => {
        hideTitleContainer();
        showOutputContainer();

        renderCharCodeDisplay(event.charCode);
        renderKeyDisplay(event.key);
        renderCodeDisplay(event.code);
    })

    _keyContainer.addEventListener('click', (event) => {
        if (copyToClipboard(_keyDisplay.textContent)) {
            addAlert();
        }
    })

    _codeContainer.addEventListener('click', (event) => {
        if (copyToClipboard(_codeDisplay.textContent)) {
            addAlert();
        }
    })

    function copyToClipboard(content) {
        let textarea = document.createElement('textarea');

        textarea.value = content;

        document.body.appendChild(textarea);

        textarea.select();

        let state = document.execCommand('copy');

        document.body.removeChild(textarea);
        return state
    }

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

    function addAlert() {
        let alert = document.createElement('section');
        let alertContent = document.createElement('p');

        alert.classList.add('container__alerts__alert');
        alertContent.classList.add('container__alerts__alert__content');

        alertContent.textContent = 'Copied text successfully!';

        setTimeout(() => {
            alert.classList.add('push');
        }, 0);

        setTimeout(() => {
            alert.classList.add('hidden');
        }, 1000)

        alert.appendChild(alertContent);

        _alertContainer.appendChild(alert);
    }
    
})();