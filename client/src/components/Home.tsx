import { Carousel } from 'react-bootstrap';

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
            <div className="mt-4 w-100">
                {/* Carousel Component */}
                <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src="/path/to/image1.jpg" alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="/path/to/image2.jpg" alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="/path/to/image3.jpg" alt="Third slide" />
                </Carousel.Item>
                </Carousel>
            </div>
        </main>
      );
    };
    
  
  export default Home;