import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container footer">
      <div className="row">
        <div className="col-md-6">
          <h4>Company</h4>
          <div className="row first-col">
            <ul className="col-md-4">
              <li>About</li>
              <li>History</li>
              <li>Team</li>
              <li>Media</li>
            </ul>
            <ul className="col-md-4">
              <li>Careers</li>
              <li>Blogs</li>
              <li>Cookie Preference</li>
            </ul>
          </div>
        </div>
        <div className="col-md-3">
          <h4>Support</h4>
          <ul>
            <li>Contact us</li>
            <li>FAQ</li>
            <li>Payments</li>
          </ul>
        </div>
        <div className="col-md-3">
          <h4>Legal</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Terms of Payment us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
