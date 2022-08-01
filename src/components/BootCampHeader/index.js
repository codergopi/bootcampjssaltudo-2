import React from 'react';
import { Text, Image } from '@sitecore-jss/sitecore-jss-react';
import gql from 'graphql-tag';
import GraphQLData from '../../lib/GraphQLData';
import Nav from 'react-bootstrap/Nav';
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
  return (
    <div className="HeaderTitleNav">
      <a href="index.html" className="navbar-brand">
        {title}
      </a>
    </div>
  );
};

let HeaderMainNavigation = ({ navLinks }) => {
  return (
    <div>
      <Nav className="HeaderMainNav" defaultActiveKey="/home" as="ul">
        {navLinks &&
          navLinks.map((listitem, index) => (
            <Nav.Item as="li" key={`navItem-${index}`}>
              <Nav.Link href={listitem.url.url}>{listitem.name}</Nav.Link>
            </Nav.Item>
          ))}
      </Nav>
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
      {/* <div className="overlay"></div> */}
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
