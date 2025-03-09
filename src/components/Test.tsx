import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Test.css';
import laptopImg from '../assets/img/laptop.png';
import StartPage from './StartPage';

import backgroundImage from '../assets/img/LightsOff.png';

function Test() {
  return (
    <div className="Test">
        <div style={styles.container}></div>
        <div style={{ marginTop: '0px', width: '100vw', marginLeft: '0', padding: '0' }}>
            <Carousel
            nextIcon={<span className="carousel-control-next-icon" style={{ filter: 'invert(100%)' }} />}
            prevIcon={<span className="carousel-control-prev-icon" style={{ filter: 'invert(100%)' }} />}
            wrap={false}
            indicators={false}
            controls={true}
            touch={true}
            keyboard={true}
            defaultActiveIndex={1}
            >

                <Carousel.Item>
                    <img src={laptopImg} alt="Second slide" style={{ width: '100%' }} />
                </Carousel.Item>

                <Carousel.Item>
                <div style={{ position: 'relative' }}> 
                    <img src={laptopImg} alt="Second slide" style={{ width: '100%' }} />
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                    <StartPage />
                    </div>
                </div>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={laptopImg} alt="Third slide" style={{ width: '100%' }} />
                </Carousel.Item>
            
            </Carousel>
        </div>
        </div>
  );
}

export default Test;

const styles = {
    container: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        marginTop: '0px',
        marginLeft: '0',
        padding: '0'
    }
};