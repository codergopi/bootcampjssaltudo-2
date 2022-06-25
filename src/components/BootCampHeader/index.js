import React from 'react';
import { Text, Image } from '@sitecore-jss/sitecore-jss-react';
import gql from 'graphql-tag';
import GraphQLData from '../../lib/GraphQLData';
import { Link } from 'react-router-dom';

const HEADER_QUERY = gql`
  query MainNavigation($headerSettingItemId: String) {
    headernavigationquery: item(language: "en", path: $headerSettingItemId) {
      ... on HeaderSettings {
        headerTitle {
          value
        }
        headerMainNav {
          targetItems {
            url {
              url
            }
            name
            pageTitle: field(name: "pageTitle") {
              value
            }
          }
        }
      }
    }
  }
`;

let HeaderTitle = ({ title }) => {
  return <h1>{title}</h1>;
};

let HeaderMainNavigation = ({ navLinks }) => {
  return (
    <div>
      {navLinks &&
        navLinks.map((listitem, index) => (
          <div key={`navItem-${index}`}>
            <Link to={listitem.url.url}>{listitem.name}</Link>
          </div>
        ))}
    </div>
  );
};

let BootCampHeader = (props) => {
  const headerQ = props.headerQuery;
  console.log(props);
  return (
    <div>
      <HeaderTitle
        title={
          props.headerQuery.headernavigationquery &&
          props.headerQuery.headernavigationquery.headerTitle.value
        }
      />
      <HeaderMainNavigation
        navLinks={
          props.headerQuery.headernavigationquery &&
          props.headerQuery.headernavigationquery.headerMainNav.targetItems
        }
      />
    </div>
  );
};

export default GraphQLData(HEADER_QUERY, {
  name: 'headerQuery',
  options: {
    variables: { headerSettingItemId: '{5A0A636B-988E-4CEB-AE18-53026817ED1A}' },
  },
})(BootCampHeader);
