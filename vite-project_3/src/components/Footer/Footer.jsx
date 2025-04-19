import "./Footer.scss";

function Footer() {
  return (
    <div className="footer-conatiner">
      <div className="footer">
        <div className="footer_top">
          <div className="footer_top--text">
            <h2>Join Our Newsletter</h2>
            <p>
              Subscribe to our newsletter and receive the latest news about our
              products and services!
            </p>
          </div>
          <div className="footer_top--box-search">
            <input type="text" />

            <div className="button-search">
              <a href="#">
                <button>Subscribe</button>
              </a>
            </div>
          </div>
        </div>

        <div className="footer_bottom"></div>
      </div>
    </div>
  );
}

export default Footer;
