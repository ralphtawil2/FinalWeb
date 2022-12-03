import Carousel from "react-bootstrap/Carousel";

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Images/pic1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="w-100">
            <a href="/shop">
              <button className="button-three">Shop</button>
            </a>
            <a href="/customize">
              <button className="button-three">Customize</button>
            </a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Images/pic2ccc.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <div className="w-100">
            <a href="/shop">
              <button className="button-three">Shop</button>
            </a>
            <a href="/customize">
              <button className="button-three">Customize</button>
            </a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Images/pic3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <div className="w-100">
            <a href="/shop">
              <button className="button-three">Shop</button>
            </a>
            <a href="/customize">
              <button className="button-three">Customize</button>
            </a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
