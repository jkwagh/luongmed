import { Carousel } from 'react-bootstrap';
import toxusImage from '../assets/toxus/page1.jpeg';
import wildmedImage from '../assets/wildmed/wildmed placeholder.png';
import criticalCareImage from '../assets/criticalcare/Critical Care Placeholder.png';

const Home = () => {
    return (
        <main role="main" className="container d-flex flex-column justify-content-center align-items-center">
            <div className="text-center">
                <h1>Welcome to EventPlanner</h1>
                <p className="lead">
                The website for all your event organizing needs
                </p>
                <p className="lead">
                Click the schedule in the navbar for a full list of events.
                </p>
                <p className="lead">
                To register for any of the listed events, please sign up.
                </p>
            </div>
            <div className="mt-1 w-50">
                {/* Carousel Component */}
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100 carousel-image" src={toxusImage} alt="First image for toxus event" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100 carousel-image" src={wildmedImage} alt="Placeholder for wildmed image" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100 carousel-image" src={criticalCareImage} alt="Placeholder for critical care image" />
                    </Carousel.Item>
                </Carousel>
            </div>
        </main>
      );
    };
    
  
  export default Home;