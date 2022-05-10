import React from "react";
import Wrapper from "../../containers/Wrapper";
import StyledAbout from "./StyledAbout";

const About = () => {
  return (
    <StyledAbout mode="dark">
      <section id="page_1" className="section">
        <h1 className="section_title">
          Imtixonlarga tayyorgarlik ko'rishdan charchadingizmi!
        </h1>
      </section>
      <section id="page_2" className="section">
        <h1 className="section_title">
          Yod olgan bilimlaringiz tezda esdan chiqyaptimi
        </h1>
      </section>
      <section id="page_3" className="section">
        <h1 className="section_title">
          Yoki impixon olishda qiyinchiliklar bormi
        </h1>
      </section>
      <section id="page_4" className="section">
        <h1 className="section_title success">
          Bizda bularning barchasiga yechim bor!!!
        </h1>
      </section>
    </StyledAbout>
  );
};

export default About;
