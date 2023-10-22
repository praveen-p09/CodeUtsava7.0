import React, { useState } from "react";
import "./MerchandiseCard.css";
import merch1 from "../../assets/images/merchandise/merch1.png";
import merch2 from "../../assets/images/merchandise/merch2.png";
import merch3 from "../../assets/images/merchandise/merch3.png";

const MerchandiseCard = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const images = [merch2, merch3, merch1];
  return (
    <div className="codeutsava__merchandise-container">
      <div className="codeutsava__merchandise-left">
        <div className="codeutsava__merchandise-img-container">
          <img src={images[0]} onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} onClick={(e) => setSelectedImg(1)} />
          <img src={images[2]} onClick={(e) => setSelectedImg(2)} />
        </div>
        <div className="codeutsava__merchandise-main-img-container">
          <img src={images[selectedImg]} />
        </div>
      </div>
      <div className="codeutsava__merchandise-right">
        <div className="codeutsava__merchandise-right-heading">
          <h1>Official Merchanise - CU7.0</h1>
          <h2>Grab yours one Now!</h2>
        </div>
        <div className="codeutsava__merchandise-right-content">
          <div className="codeutsava__merchandise-right-prices">
            <p>Price (Customised): <b>₹499 /-</b></p>
            <p>Price (Non-Customised): <b>₹449 /-</b></p>
          </div>
          <div className="codeutsava__merchandise-right-special-prices">
            <h2>Special Offer!</h2>
            <p>Buy <b>3</b> Get <b>₹100 /- OFF</b></p>
            <p>Buy <b>5</b> Get <b>₹250 /- OFF</b></p>
            <p>Buy <b>10</b> Get <b>₹600 /- OFF</b></p>
          </div>
          <h2>Sizes Available: XS, S, M, L, XL</h2>
          <p><b>Disclaimer:</b> Delivery Available Only in <b>Raipur.</b></p>
        </div>
        <a
          className="codeutsava__merchandise-link"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdnFe_Zm97Of15Hs2UH9V-mIoiQz8rSggj48y41ekjKkcSj7g/viewform"
          target="__blank"
        >
          Buy Now!
        </a>
      </div>
    </div>
  );
};

export default MerchandiseCard;
