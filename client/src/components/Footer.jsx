import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <footer className="text-center text-lg-start">
      <hr />
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3  mb-4">
              <h3 className="fs-5 text-uppercase ">MUSIFY</h3>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#00d154",
                  height: "2px",
                }}
              />
              <p className="text-secondary">
                Search through your favourite artists music history with this
                app. Disover new albums and experience new music!
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h3 className="fs-5 text-uppercase ">About Us</h3>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#00d154",
                  height: "2px",
                }}
              />
              <p>
                <Link className="footer-link text-secondary " to="#!">
                  Sobre nosotros
                </Link>
              </p>
              <p>
                <Link className="footer-link text-secondary " to="#!">
                  Blog
                </Link>
              </p>
              <p>
                <Link className="footer-link text-secondary " to="#!">
                  Hack Cares
                </Link>
              </p>
              <p>
                <Link className="footer-link text-secondary " to="#!">
                  Hack Pro
                </Link>
              </p>
              <p>
                <Link className="footer-link text-secondary " to="#!">
                  Tienda
                </Link>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h3 className="fs-5 text-uppercase ">Follow us!</h3>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#00d154",
                  height: "2px",
                }}
              />
              <p>
                <Link className="footer-link text-secondary " to="#!">
                  <FaInstagram className="me-2" />
                  Instagram
                </Link>
              </p>
              <p>
                <Link className="footer-link text-secondary " to="#!">
                  <AiOutlineFacebook className="me-2" />
                  Facebook
                </Link>
              </p>
              <p>
                <Link className="footer-link text-secondary " to="#!">
                  <AiOutlineLinkedin className="me-2" />
                  Linkedin
                </Link>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h3 className="fs-5 text-uppercase ">Buy</h3>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#00d154",
                  height: "2px",
                }}
              />
              <p className="text-secondary">How can I buy?</p>
              <p className="text-secondary">Terms and Conditions</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
