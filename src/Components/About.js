import React from "react";
const About = ({ data }) => {
  if (data) {
    var name = data.name;
    var profilepic = "images/" + data.image;
    var bio = data.bio;
    var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var email = data.email;
    var resumeDownload =process.env.PUBLIC_URL+''+data.resumedownload; 
  }
    
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Soukayna's Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>A propos de moi</h2>
             <div  dangerouslySetInnerHTML={{__html:bio}}></div>
          <div className="row">
            <div className="columns contact-details">
              <h2>Adresse et numéro de téléphone</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  {street}
                  <br />
                  {city} {state}, {zip}
                </span>
                <br />
                <span>{phone}</span>
                <br />
                <span>{email}</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a href={resumeDownload} className="button" download>
                  <i className="fa fa-download"></i>Téléchargez le CV
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
