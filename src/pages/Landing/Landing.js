import React, { useState, useEffect } from "react";
import AppHeader from "../../components/AppHeader/AppHeader";
import Beneficiary from "../../components/Beneficiary/Beneficiary";
import { getBeneficiariesDetailAPI } from "../../services/beneficiaryAPI";
import "./landing.scss";

const Landing = () => {
  return (
    <div className="landing-page">
      <AppHeader />
      <div className="banner">
        <BannerCampaign />
        <RecentCampaigns />
      </div>
    </div>
  );
};

const BannerCampaign = () => {
  return (
    <div className="banner-compaign">
      <img
        src="https://i.pinimg.com/736x/3f/b5/4f/3fb54f5e9945a4c6fd1ab9f3da1e5672.jpg"
        alt=""
      />
    </div>
  );
};

const RecentCampaigns = () => {
  const [beneficiaries, setBeneficiaries] = useState([]);
  useEffect(() => {
    getBeneficiariesDetailAPI()
      .then((response) => {
        const { success, data } = response;
        if (success) {
          setBeneficiaries(data);
        }
      })
      .catch((error) => {
        console.log("getBeneficiariesDetailService", error);
      });
  }, []);

  return (
    <div className="recent-compaigns">
      {beneficiaries.map((beneficiary) => (
        <Beneficiary key={beneficiary.id} beneficiary={beneficiary} />
      ))}
    </div>
  );
};

export default Landing;
