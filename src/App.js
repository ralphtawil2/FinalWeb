import BasicExample from './components/NavBar';
import CarouselFadeExample from './components/Carousel.js';
//This is a test.
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MultiActionAreaCard from './components/cards1.js';
import MultiActionAreaCard2 from './components/cards2.js';
import MultiActionAreaCard3 from './components/cards3.js';
import ImgOverlayExample from './components/summer';
import ImgOverlayExample2 from './components/autumn';
import ImgOverlayExample3 from './components/winter';
import ImgOverlayExample4 from './components/spring';
import FooterT from './components/footerT';


import "./styles.css"



function App() {
  return (
    <>
    <div id='home'>
    <BasicExample />
    <CarouselFadeExample/>
    <h1 className='trend'> TRENDING NOW </h1>
    <Container className='cards'>
      <Row>
        <Col className='cardstyle'><MultiActionAreaCard /></Col>
        <Col className='cardstyle'><MultiActionAreaCard2 /></Col>
        <Col className='cardstyle'><MultiActionAreaCard3 /></Col>
      </Row>
    </Container>
    <hr className='horline' id='anchor-AboutUs'/>
    <h2 className='aboutus'>About Us</h2>
    <h3 className='parag'>Royal-Tee is an online clothing shop but with a little twist. You can design and customise your own outfit, and after making your order , we will review your design and make it available for the other customers to buy . Why us ? Because we give back to our community by offering royalties to every designer for each customised design sold.</h3>
    <hr className='horline'/>
    <h4 className='aboutus'>Collections</h4>
    <ImgOverlayExample/>
    <ImgOverlayExample2/>
    <ImgOverlayExample3/>
    <ImgOverlayExample4/>
    <FooterT/>
  
    </div>
        
    
    </>
  );
}


export default App;
