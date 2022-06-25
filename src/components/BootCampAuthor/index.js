import React from 'react';
import { Text, Image } from '@sitecore-jss/sitecore-jss-react';

const BootCampAuthor = (props) => (
  <div>
    <h1>
      <Text field={props.fields.authorname} />
    </h1>
    <span>
      <Text field={props.fields.authordesignation} />
      {'  '}
      {'('}
      <Text field={props.fields.authordepartment} />
      {')'}
    </span>
    <Image media={props.fields.authorImage} />
  </div>
);

export default BootCampAuthor;
