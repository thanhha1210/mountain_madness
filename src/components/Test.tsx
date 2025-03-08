// import Carousel from 'react-bootstrap/Carousel';
import './Test.css';

function Test() {
  return (
    <div id='laptop' className='laptop' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <img
        id='laptop-image'
        className='laptop-image'
        src='src/assets/img/laptop.png'
        alt='Laptop'
        style={{ position: 'absolute', top: '75%', left: '50%', transform: 'translate(-50%, -50%)' }}
      />
    </div>
  );
}

export default Test;

// function Test() {

//   return (

//     <div id='laptop' class='laptop'>
// <div id='screen' class='screen'>
// <div id='rectangle1' class='rectangle1'>
// </div>
// <div id='rectangle2' class='rectangle2'>
// </div>
// </div>
// <img id='camera' class='camera' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEnSURBVHgBfVK9aoRAEB7XAwM2phCDgljY2l8h5vI4qXJ5kpguj3Kp4olvYGdjFBHsrhEUFDMju2Ehxg+WHfabb+dXAQlhGJ4URXlB84THwHPDkyzL8p5lWSL8FGFEUfSG5Bn+AX4Wp2n6SrYqC6ZpgqZpoCgKKMsSuq6DeZ5B13VgjB09zzOqqvpUeEpfJMjzHPq+/xOFREEQwOFwAPz8ifEaoG3bTQGB3onnaZ4ZL3pNZQ8S/8h4l2Acx12RxBskoraCpmm7Iom/kSghy7KsXZHEXxkNjizbttcubYHeiSegf6zWdf3tuu69qqpH0zRpHjAMwzofSslxHPB9X7SbNuPjdyNwXrFo/xa4YN0YVTxixAtGvKJpoPgB7zsqGp0veD9TBOH7A4Gng7Ak+TgVAAAAAElFTkSuQmCC'/>
// </img>
// </div>

//     // <div style={{ display: 'block', width: 700, padding: 30 }}>

//         {/* <Carousel>
//         <Carousel.Item>
//             <Carousel.Caption>
//             <h3>First slide label</h3>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//             </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//             <Carousel.Caption>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//             </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//             <Carousel.Caption>
//             <h3>Third slide label</h3>
//             <p>
//                 Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//             </Carousel.Caption>
//         </Carousel.Item>
//         </Carousel> */}
//     // </div>
//   )
// }

// export default Test