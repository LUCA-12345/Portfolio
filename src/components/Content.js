import React, { useState } from "react";
import Portholes from "./Portholes";

function Content(props) {
  const data = [
    {
      image: "/dashboard-lighttheme.png",
      paragraphOne:
        "Angular and TypeScript were employed in creating an interactive frontend, facilitated by KendoUI. This combination enabled the formation of several uniquedata visualizations, highlighting key business metrics effectively.",
      paragraphTwo:
        "The application interfaced with a robust server-side layer, developed with Java and Spring, aimed at proficiently managing the data processing and business logic. Efficient data retrieval was ensured by leveraging MySQL for data storage and designing meticulous stored procedures.",
      paragraphThree:
        "  This project epitomizes a strong skill set in handling full-stack development, showcasing proficiency in Angular, TypeScript, KendoUI, Java, Spring, and MySQL. It's a testament to the capacity to develop intricate business applications that cater to diverse data analysis requirements.",
    },
    {
      image: "approvals-page.png",
      paragraphOne:
        "The same tools were used here, The API was expentially more complicated because the data is not only being fetched but also maintained and manipulated via the methods defined.",
      paragraphTwo:
        "The UI and the logic tied to maintaining the conditional nature between filters, groups, conditions, and criteria is pretty intense aswell. ",
    },
    // Add more objects for additional images
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % data.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + data.length) % data.length);
  };

  return (
    <div className={props.className}>
      <section className="displayOne">
        <div className="dispOne" id="dispOne">
          <img src={data[currentIndex].image} id="dashboard" alt="dashboard" />
          <div className="switchBox">
            <div className="arrowPrev" onClick={handlePrevClick}>
              &lt;
            </div>
            <label className="switch">
              <input type="checkbox" id="themeSwitch" />
              <span className="slider"></span>
            </label>
            <div className="arrowNext" onClick={handleNextClick}>
              &gt;
            </div>
          </div>
        </div>
      </section>
      <Portholes
        paragraphOne={data[currentIndex].paragraphOne}
        paragraphTwo={data[currentIndex].paragraphTwo}
        paragraphThree={data[currentIndex].paragraphThree}
      />
    </div>
  );
}

export default Content;
