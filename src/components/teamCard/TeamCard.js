import React from "react";

import "./TeamCard.css";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";

const TeamCard = ({
  img,
  name,
  position,
  linkedin,
  domain,
}) => {
  const imgIdRegex = /\/uc\?id=([\w-]+)&?/;
  const match = img.match(imgIdRegex);
  const extractedId = match ? match[1] : null;
  return (
    <div className="codeutsava__team-card">
      <div id="dfg"></div>
      <div className="codeutsava__team-card-img">
        <img src={`https://drive.google.com/thumbnail?id=${extractedId}`} />
      </div>
      <div className="codeutsava__team-card-content">
        <h3 className="name">{name}</h3>
        <h4 className="title">{position}</h4>
        <h4 className="domain">{domain}</h4>
      </div>
      <ul className="social">
        {/* <li>
          <a href="" className="fa fa-facebook" aria-hidden="true"></a>
        </li> */}
        {/* <li>
          <a href="" className="fa fa-twitter" aria-hidden="true"></a>
        </li> */}
        {/* <li>
          <a href="" className="fa fa-github" aria-hidden="true"></a>
        </li> */}
        <li>
          <a
            href={linkedin}
            target="_blank"
            className="fa fa-linkedin"
            aria-hidden="true"
          ></a>
        </li>
      </ul>

      
    </div>
  );
};

export default TeamCard;
