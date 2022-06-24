import React from 'react';
import { RichText, Text, Image, DateField } from '@sitecore-jss/sitecore-jss-react';

const Article = (props) => (
  <div>
    <h1>
      <Text field={props.fields.title} />
    </h1>
    <span>
      <Text field={props.fields.author} />
      &nbsp;(
      <DateField
        field={props.fields.publishdate}
        render={(date) => <em>{date.toLocaleString()}</em>}
      />
      )
    </span>
    <br />
    <p>
      <RichText field={props.fields.description} />
    </p>
    <br />
    {console.log({ props })}
    {props.fields.relatedarticle &&
      props.fields.relatedarticle.map((listitem, index) => (
        <div key={`relatedarticle-${index}`}>
          <a href={listitem.url}>
            <Text field={listitem.fields.pageTitle} />
          </a>
        </div>
      ))}
  </div>
);

export default Article;
