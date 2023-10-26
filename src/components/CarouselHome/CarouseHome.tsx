import Carousel from 'react-bootstrap/Carousel';

const CarouseHome = () => {
return (

    <Carousel>

    <Carousel.Item>
        <img 
        className='d-block w-100'
        style={{maxHeight:"500px", objectFit: 'cover'}}
        src="src/assets/Images/student-849825_1280.jpg" 
        alt="Imagen 1" />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    
    
    <Carousel.Item>
    <img 
        className='d-block w-100'
        style={{maxHeight:"500px", objectFit: 'cover'}}
        src="src/assets/Images/code-1076536_1280.jpg" 
        alt="Imagen 2" />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    
    
    <Carousel.Item>
    <img 
        className='d-block w-100'
        style={{maxHeight:"500px", objectFit: 'cover'}}
        src="src/assets/Images/glasses-1052010_1280.jpg" 
        alt="Imagen 3" />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>


  </Carousel>

    )
} 

export default CarouseHome;