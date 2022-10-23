import Carousel from 'react-bootstrap/Carousel';


function CarouselFadeExample() {
  return (
    <Carousel fade >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Images/hoodie.jpg"
          alt="First slide"
          
        />
        <Carousel.Caption>
          <div className='w-100'>
          <button className='btn btn-block btn-primary'>Shop</button>
          <button className='btn btn-block btn-primary'>Customize</button>
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
          <button className='btn btn-block btn-primary'>Shop</button>
          <button className='btn btn-block btn-primary'>Customize</button>
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
          <button className='btn btn-block btn-primary'>Shop</button>
          <button className='btn btn-block btn-primary'>Customize</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
