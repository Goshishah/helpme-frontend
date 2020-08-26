import React from "react";
import "./beneficiary.scss";

const Beneficiary = ({ beneficiary }) => {
  console.log("beneficiary......", beneficiary);
  const { title, summary, raised_ammount, required_ammount } = beneficiary;
  return (
    <div className="beneficiary">
      <img
        src="https://i1.wp.com/www.transparenthands.org/wp-content/uploads/2020/06/Akasha-Akbar.jpg?resize=768%2C491&ssl=1"
        alt="dumy-text"
      />
      <div>
        <strong>{title}</strong>
      </div>
      <div className="detail">
        {summary}...
        <a className="read-more" href="#">
          [Read More]
        </a>
      </div>
      <div> progress bar</div>
      <div className="donation-detail">
        <div className="required-donation">
          <strong>Rs. {required_ammount}</strong>
          <div>Required</div>
        </div>
        <div className="required-donation">
          <strong>Rs. {raised_ammount}</strong>
          <div>Raised</div>
        </div>
      </div>
    </div>
  );
};

export default Beneficiary;
