import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const ProductCarousel = (props) => {
  const carouselItems = props.fields.items;
  console.log(carouselItems);
  return (
    <div>
      {carouselItems &&
        carouselItems.map((listitem, index) => (
          <div key={`carouselitem-${index}`}>
            <Text field={listitem.fields.carouselText} />
          </div>
        ))}
    </div>
  );
};

export default ProductCarousel;
