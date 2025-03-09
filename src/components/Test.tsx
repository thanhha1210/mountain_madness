import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Test.css';
import laptopImg from '../assets/img/laptop.png';
import StartPage from './puzzles/StartPage';
import MainPuzzle from './puzzles/MainPuzzle';
import lightButton from '../assets/img/lightButton.png'
import lightButtonPushed from '../assets/img/lightButtonPress.png'
import backgroundImage from '../assets/img/laptop.png'
import BlogPuzzle from './puzzles/BlogPuzzle';
import SecondPuzzle from './puzzles/SecondPuzzle';
import FinalPuzzle from './puzzles/FinalPuzzle';
import FourthPuzzle from './puzzles/FourthPuzzle';
import ThirdPuzzle from './puzzles/ThirdPuzzle';

function Test() {
  const [idx, setIdx] = useState(0);
  const pictures = [lightButton, lightButtonPushed];
  const [index, setIndex] = useState(0);
  const puzzles = [StartPage, BlogPuzzle, SecondPuzzle, ThirdPuzzle, FourthPuzzle, FinalPuzzle];
  

  function resetLight() {
    setIdx(1);
    setTimeout(() => { setIdx(0) }, 1000);
  }
  const handleNextPuzzle = () => {
    if (index < puzzles.length - 1) {
    setIndex(index + 1);
    }
};

  return (
    <div className="Test">
        {/* <div style={styles.container}></div> */}
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
                    <MainPuzzle />
                    </div>
                </div>
                </Carousel.Item>

      <Carousel.Item>
        <div>
          <div className="lightButton">
            <button className="light" onClick={resetLight}>
              <img src={pictures[idx]} alt="lightButton" />
            </button>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="bg-[${}laptopImg]">
          <MainPuzzle></MainPuzzle>
        </div>
        <p>Second</p>
      </Carousel.Item>

      <Carousel.Item>
        
        <img src={laptopImg} alt="Third slide" />
        <p>Third</p>
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