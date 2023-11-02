import React from "react";
import footer from "./../../images/footer.png";
import { StyledFooter } from "./StyledFooter";

function Footer() {
  return (
    <StyledFooter>
      <div>
        <img src={footer} alt="" className="footer" />
      </div>
    </StyledFooter>
  );
}

export default Footer;
