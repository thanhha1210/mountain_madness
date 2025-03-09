import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Test.css';
import laptopImg from '../assets/img/laptop.png';
import StartPage from './StartPage';

function Test() {
  return (
    <div>
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
        <StartPage />
      </Carousel.Item>

      <Carousel.Item>
        <img src={laptopImg} alt="Second slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img src={laptopImg} alt="Third slide" />
      </Carousel.Item>
      
    </Carousel>
    </div>
  );
}

export default Test;