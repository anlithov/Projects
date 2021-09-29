import './mosimac-design/mosimac.scss'

import TopBar from './mosimac-design/jsx-components/topbar/TopBar';
import Footer from './mosimac-design/jsx-components/footer/Footer';
import ComponentsPage from './mosimac-design/jsx-components/components-page/ComponentsPage';


function App() {
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

  return (
      <div   >
    <TopBar />
          <ComponentsPage />
    <Footer />
      </div>
  )
}

export default App;
