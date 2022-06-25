import React from 'react';
import { Text, RichText, Image } from '@sitecore-jss/sitecore-jss-react';

const BootCampDepartment = (props) => (
  <div>
    <h1>
      <Text field={props.fields.departmentName} />
    </h1>
    <br />
    <RichText field={props.fields.departmentResponsibilities} />
    <br />
    <Image media={props.fields.departmentLogo} />
  </div>
);

export default BootCampDepartment;
