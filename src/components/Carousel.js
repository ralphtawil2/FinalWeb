import Carousel from "react-bootstrap/Carousel";

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Images/hoodie.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="w-100">
            <button className="button-three">Shop</button>
            <button className="button-three">Customize</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Images/friends.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <div card-footer d-flex justify-content-between>
            <button className="button-three">Shop</button>
            <button className="button-three">Customize</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Images/mountain.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <div card-footer d-flex justify-content-between>
            <button className="button-three">Shop</button>
            <button className="button-three">Customize</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
