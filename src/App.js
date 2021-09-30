import './mosimac-design/mosimac.scss'

import TopBar from './mosimac-design/jsx-components/topbar/TopBar';
import Footer from './mosimac-design/jsx-components/footer/Footer';
import Webpages from "./web-pages";


function App() {

  return (
      <div>
        <TopBar />
            <Webpages />
        <Footer />
      </div>
  )
}

export default App;
