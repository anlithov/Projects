// Creating --vh, --vw variables instead of vh,vw
(function init100vh() {
    function setHeight() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);

    }
    setHeight();
    window.addEventListener('resize', setHeight);
})();

(function init100vw() {
    function setWidth() {
        let vw = window.innerWidth * 0.01;
        document.documentElement.style.setProperty('--vw', `${vw}px`);

    }
    setWidth();
    window.addEventListener('resize', setWidth);
})();