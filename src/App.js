import './mosimac-design/mosimac.scss'

import TopBar from './mosimac-design/jsx-components/1a-TopBar/TopBar';
import Footer from './mosimac-design/jsx-components/1b-Footer/Footer';
import ComponentsPage from './mosimac-design/jsx-components/2a-ComponentsPage/ComponentsPage';


function App() {
  return (
      <div>
    <TopBar />
          <ComponentsPage />
    <Footer />
      </div>
  )
}

export default App;
