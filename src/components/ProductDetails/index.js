import React from 'react';
import { Text, Image } from '@sitecore-jss/sitecore-jss-react';

const ProductDetails = (props) => (
  <div>
    <h1>
      <Text field={props.fields.productName} />
    </h1>
    <br />
    <Text field={props.fields.productModelYear} />
    <Text field={props.fields.productBrand} />
    <Text field={props.fields.productPricing} />
    <br />
    <Image media={props.fields.productImage} />
  </div>
);

export default ProductDetails;
