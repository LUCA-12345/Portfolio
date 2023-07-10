import React from "react";

function Portholes(props) {
  return (
    <section className="portHolesOne">
      <div className="portOne">
        <img src="/shapelined-_JBKdviweXI-unsplash.jpg" alt="moutains" />
      </div>
      <div className="portTwo">
        <p>{props.paragraphOne}</p>
        <p>{props.paragraphTwo}</p>
        <p>{props.paragraphThree}</p>
      </div>
      <div className="portThree">
        <img src="/shapelined-_JBKdviweXI-unsplash.jpg" alt="moutains" />
      </div>
      <div className="xOne x"></div>
      <div className="xTwo x"></div>
      <div className="xThree x"></div>
    </section>
  );
}

export default Portholes;
