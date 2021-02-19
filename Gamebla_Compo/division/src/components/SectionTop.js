import React from "react";
import "./SectionTop.css";

const SectionTop = () => {
  return (
    <section className="section sectionTop">
      <div className="topIcon">
        <div className="imgCircle">
          <img src="./Img/sampleImg.jpg" alt="" className="gameImg" />
        </div>
        <p className="title">리그오브레전드</p>
      </div>
      <div className="topIcon">
        <div className="imgCircle">
          <img src="./Img/sampleImg.jpg" alt="" className="gameImg" />
        </div>
        <p className="title">마블어벤저스</p>
      </div>
      <div className="topIcon">
        <div className="imgCircle">
          <img src="./Img/sampleImg.jpg" alt="" className="gameImg" />
        </div>
        <p className="title">오버워치</p>
      </div>
      <div className="topIcon">
        <div className="imgCircle">
          <img src="./Img/sampleImg.jpg" alt="" className="gameImg" />
        </div>
        <p className="title">로스트아크</p>
      </div>
      <div className="topIcon">
        <div className="imgCircle">
          <img src="./Img/sampleImg.jpg" alt="" className="gameImg" />
        </div>
        <p className="title">메이플스토리</p>
      </div>
      <div className="topIcon">
        <div className="imgCircle">
          <img src="./Img/sampleImg.jpg" alt="" className="gameImg" />
        </div>
        <p className="title">NBA2K21</p>
      </div>
      <div className="topIcon">
        <div className="imgCircle">
          <img src="./Img/sampleImg.jpg" alt="" className="gameImg" />
        </div>
        <p className="title">스타크래프트</p>
      </div>
      <div className="topIcon more">
        <div className="imgCircle">
          <img src="./Img/icons/moreBtn.png" alt="" className="gameImg" />
        </div>
        <p className="title">MORE</p>
      </div>
    </section>
  );
};

export default SectionTop;
