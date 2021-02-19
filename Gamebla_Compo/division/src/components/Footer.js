import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="icon">
        <a href="">
          <img src="./Img/icons/home.png" alt="" className="iconImg" />
          <div className="text">홈</div>
        </a>
      </div>
      <div className="icon">
        <a href="">
          <img src="./Img/icons/_video.png" alt="" className="iconImg" />
          <div className="text">동영상</div>
        </a>
      </div>
      <div className="icon">
        <a href="">
          <img src="./Img/icons/_streaming.png" alt="" className="iconImg" />
          <div className="text">라이브</div>
        </a>
      </div>
      <div className="icon">
        <a href="">
          <img src="./Img/icons/_feed.png" alt="" className="iconImg" />
          <div className="text">피드</div>
        </a>
      </div>
      <div className="icon">
        <a href="">
          <img src="./Img/icons/_user.png" alt="" className="iconImg" />
          <div className="text">MY</div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
