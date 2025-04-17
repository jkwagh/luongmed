import { Carousel } from 'react-bootstrap';

const Events = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100 h-80" src="/path/to/image1.jpg" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/path/to/image2.jpg" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/path/to/image3.jpg" alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Events;