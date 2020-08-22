import React from "react";
import "./beneficiary.scss";

const Beneficiary = () => {
  return (
    <div className="beneficiary">
      <img
        src="https://i1.wp.com/www.transparenthands.org/wp-content/uploads/2020/06/Akasha-Akbar.jpg?resize=768%2C491&ssl=1"
        alt="dumy-text"
      />
      <div>
        <strong>Donate to Umar Habib for Her Cochlear Implant</strong>
      </div>
      <div className="detail">
        To help Umar have her surgery and enable her to hear once again, please
        send in your contribution to her surgery e...
        <a className="read-more" href="#">
          [Read More]
        </a>
      </div>
      <div> progress bar</div>
      <div className="donation-detail">
        <div className="required-donation">
          <strong>Rs. 1000</strong>
          <div>Required</div>
        </div>
        <div className="required-donation">
          <strong>Rs. 5000</strong>
          <div>Raised</div>
        </div>
      </div>
    </div>
  );
};

export default Beneficiary;
