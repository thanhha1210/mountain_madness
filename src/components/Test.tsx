import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Test.css';
import laptopImg from '../assets/img/laptop.png';
import StartPage from './StartPage';
import lightButton from '../assets/img/lightButton.png';
import lightButtonPushed from '../assets/img/lightButtonPress.png';

export function resetLight() {
  changeButton();
  var time = new Date().getTime();
  //do nothing
  while(new Date().getTime() < time + 10000){
      changeButton();
  }
}

export function changeButton() {
  if (idx === 0) {
    idx = 1;
  }
  else {
    idx = 0;
  }
}

var idx = 0;
const pictures = [
  lightButton,
  lightButtonPushed
]

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
        <div>
          <div className="lightButton">
            <button className="light" onClick={() => resetLight()}></button>
            <img src={pictures[idx]} alt="lightButton" />
          </div>
        </div>
      </Carousel.Item>
      
    </Carousel>
    </div>
  );
}

export default Test;