import React from 'react';
import {
  MDBFooter,
  MDBContainer,

  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

export default function Footerr() {
  return (
    <MDBFooter className='bg-beige text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <h1 className='myFont'>Our Socials</h1>
        <section className='mb-4'>
          <MDBBtn
            floating
            className='m-1 facebook'
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1 twitter'
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='twitter' />
          </MDBBtn>


          <MDBBtn
            floating
            className='m-1 insta'
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn
            floating 
            className='m-1 whatsapp' 
            href='#!'
            role='button'>
            <MDBIcon fab icon='whatsapp' />
          </MDBBtn>

        </section>
      </MDBContainer>
    </MDBFooter>
  );
}

