import React from "react";
import AppHeader from "../../components/AppHeader/AppHeader";
import Beneficiary from "../../components/Beneficiary/Beneficiary";
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
  return (
    <div className="recent-compaigns">
      <Beneficiary />
      <Beneficiary />
      <Beneficiary />
      <Beneficiary />
    </div>
  );
};

export default Landing;
