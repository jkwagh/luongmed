import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from './appContext';

const Events = () => {
  const { events, user } = useAppContext();
  const navigate = useNavigate();

  console.log('User:', user);

  const handleNavigate = (id: string) => {
    navigate(`/events/${id}`);
  };

  return (
    <Carousel>
      {events.map((event) => (
        <Carousel.Item key={event.id}>
          <img
            className="d-block w-100 h-80 carousel-image"
            src={event.image}
            alt={event.name}
            onClick={() => handleNavigate(event.id)}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Events;