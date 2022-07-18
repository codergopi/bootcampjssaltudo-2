import React from 'react';
import { Text, Image } from '@sitecore-jss/sitecore-jss-react';

const BootCampHero = (props) => (
  <div className="BootCampHero">
    <div className="row">
      <div className="col-12 col-md-6 side-content">
        <h2>
          <Text field={props.fields.bootcampShortTitle} />
        </h2>
        <h1 className="static">
          <Text field={props.fields.bootcampTitle} />
        </h1>
        <div>
          <p>
            <Text field={props.fields.bootcampBrief} />
          </p>
        </div>
      </div>
      <div className="image col-12 col-md-6">
        <div className="outer">
          <div className="wrapper">
            <span>
              <Image media={props.fields.bootcampImage} />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BootCampHero;
