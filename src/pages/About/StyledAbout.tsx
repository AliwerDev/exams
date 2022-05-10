import styled from "styled-components";

interface IProps {
  mode: string;
}

const StyledAbout = styled.div<IProps>`
  .section {
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
    background-position: center;
    background-image: url("https://img.jagranjosh.com/imported/images/E/Articles/exam_pressure_bodyimage.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }
  #page_1 {
    background-image: url("https://img.jagranjosh.com/imported/images/E/Articles/exam_pressure_bodyimage.jpg");
  }
  #page_2 {
    background-image: url("https://www.eaie.org/.imaging/mte/eaie-theme/width-820-not-expanding/dam/images/blog-images/2014/2014-06-20.jpg/jcr:content/2014-06-20.jpg");
  }
  #page_3 {
    background-image: url("https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/8/20/1408549299804/An-exam-invigilator-014.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=5e35d9d7e0c222fcd132d6af322a8c21");
  }
  #page_4 {
    background-image: url("https://www.becker.com/sites/default/files/styles/atge_no_style_lg/public/2020-04/shutterstock_790043191.jpg?itok=bxUaQha4");
  }
  .section_title {
    background-color: #f3ec78;
    font-family: "Tapestry", cursive;
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    font-size: 75px;
    font-weight: bold;
    background-clip: text;
    text-shadow: #ffffff 5px 5px 5px 10px;
    -webkit-text-fill-color: transparent;
    background-image: url("https://img.freepik.com/free-vector/orange-watercolor-texture-background_208007-65.jpg?size=626&ext=jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
    margin-bottom: 20px;
    transition: all 0.3s ease-in-out;

    &.success {
      background-color: #f3ec78;
    }
  }
`;

export default StyledAbout;
