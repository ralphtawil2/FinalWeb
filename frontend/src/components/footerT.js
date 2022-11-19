import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

export default function Footerr() {
  return (
    
      <MDBFooter className="footer-body">
        <h1 className="Our-socials-header">Our socials</h1>
        <ul className="wrapper">
          <li className="icon facebook">
            <span className="tooltip">Facebook</span>
            <span>
              <i className="fab fa-facebook-f"></i>
            </span>
          </li>

          <li className="icon instagram">
            <span className="tooltip">Instagram</span>
            <span>
              <i className="fab fa-instagram"></i>
            </span>
          </li>
        </ul>
      </MDBFooter>
   
  );
}
