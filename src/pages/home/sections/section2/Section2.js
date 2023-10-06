import React from "react";
import "./Section2.css";
import WordGlobe from "../../../../components/wordGlobe/WordGlobe";
import ghost from "../../../../assets/images/ghost.png";

const Section2 = () => {
  return (
    <div className="codeutsava__section2" id="aboutus">
      <div className="codeutsava__section2-body">
        <div className="codeutsava__section2-title">
          About Us
          <img src={ghost}></img>
        </div>
        <div className="codeutsava__section2-menu">
          <div className="codeutsava__section2-wordglobe">
            <WordGlobe />
          </div>
          <div className="codeutsava__section2-content">
            <span style={{ color: "var(--secondary-c)" }}>CodeUtsava 7.0</span>{" "}
            is an event being organized by Turing Club of Programmers, the
            Official Coding Club of NIT Raipur. It aims to foster and nurture
            invigorating coding culture among the students of the Institute
            through its Mentorship programme, workshops, and along with several
            other events including the annual event CodeUtsava. Students from
            all over India can take part in this event, attend Workshops,
            participate in the Hackathon, and various other coding related
            activities which are organized under this event.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
