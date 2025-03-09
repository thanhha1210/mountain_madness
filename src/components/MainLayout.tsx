import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Test.css';
import laptopImg from '../assets/img/laptop.png';
import StartPage from './puzzles/StartPage';
import MainPuzzle from './puzzles/MainPuzzle';

function MainLayout() {
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
        <div
          className="bg-cover bg-center bg-no-repeat w-full h-[90vh] flex items-center justify-center"
          style={{ backgroundImage: `url(${laptopImg})` }}
        >
          <div className="w-4/5 bg-transparent p-6 rounded-xl shadow-lg">
            <MainPuzzle />
          </div>
        </div>
      </Carousel.Item>


      <Carousel.Item>
        <img src={laptopImg} alt="Third slide" />
      </Carousel.Item>
      
    </Carousel>
    </div>
  );
}

export default MainLayout;