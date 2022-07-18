import React from 'react';
import { RichText, Text, Image } from '@sitecore-jss/sitecore-jss-react';

const BootCampCodeDesc = (props) => (
  <div>
    <h1>
      <Text field={props.fields.CodeDescTitle} />
    </h1>
    <p>
      <Text field={props.fields.CodeDescBrief} />
    </p>
    <h2>
      <Text field={props.fields.CodeDescSubTitle} />
    </h2>
    <p>
      <Text field={props.fields.CodeDescSubBrief} />
    </p>
    <p>
      <Image media={props.fields.CodeDescCodeSnippet} />
    </p>
    <p>
      <RichText field={props.fields.CodeDescCodeDescription} />
    </p>
  </div>
);

export default BootCampCodeDesc;
