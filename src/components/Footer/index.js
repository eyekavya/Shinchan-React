import React from "react";
import footer from "./../../images/footer.png";
import { StyledFooter } from "./StyledFooter";

function Footer() {
  return (
    <StyledFooter>
      <div className="container">
        <img src={footer} alt="" className="footer" />
        <p className="footer-text">Made with ❤️ by Kavya</p>
      </div>
    </StyledFooter>
  );
}

export default Footer;
