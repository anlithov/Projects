import './mosimac-design/mosimac.scss'

import TopBar from './mosimac-design/jsx-components/topbar/TopBar';
import Footer from './mosimac-design/jsx-components/footer/Footer';
import ComponentsPage from './mosimac-design/jsx-components/components-page/ComponentsPage';


function App() {
  return (
      <div   >
    <TopBar />
          <ComponentsPage />
    <Footer />
      </div>
  )
}

export default App;
