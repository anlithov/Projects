import './mosimac-design/mosimac.scss'
import './web-pages/components/index.scss'

import TopBar from './mosimac-design/js/TopBar';
import Footer from './mosimac-design/js/Footer';
import Webpages from "./web-pages";
import {ReactComponent as Design} from "./svg/design.svg";
import {ReactComponent as Typography} from "./svg/typography.svg";
import {ReactComponent as Components} from "./svg/components.svg";
import {ReactComponent as About} from "./svg/about.svg";
import {ReactComponent as Contact} from "./svg/contact.svg";
import {ReactComponent as Logo} from "./svg/logo.svg";



function App() {
    const menuLogo = {
        svg: <Logo />,
    }
    const menuButtons = [
        {name: 'design', svg: <Design />},
        {name: 'typography', svg: <Typography/>},
        {name: 'components', svg: <Components/>},
        {name: 'about', svg: <About/>},
        {name: 'contact', svg: <Contact/>},
    ]
    const themeList = [
        { name: 'theme-latico' },
        { name: 'theme-martin' },
        { name: 'theme-clary' },
        { name: 'theme-ricco' },
        { name: 'theme-hyggo' },
        { name: 'theme-patri' },
        { name: 'theme-vermir' },
        { name: 'theme-risana' },
    ]
  return (
      <>
        <TopBar menuLogo={menuLogo} menuButtons={menuButtons} themeList={themeList}/>
            <Webpages />
        <Footer/>
      </>
  )
}

export default App;
