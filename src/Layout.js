import React from 'react';
import { Placeholder, VisitorIdentification } from '@sitecore-jss/sitecore-jss-react';
import { NavLink } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import deepEqual from 'deep-equal';
import Helmet from 'react-helmet';
import BootCampHeader from './components/BootCampHeader';

import 'bootstrap/dist/css/bootstrap.css';

import './assets/app.css';
import logo from './assets/sc_logo.svg';

const Layout = ({ route }) => (
  <React.Fragment>
    <Helmet>
      <title>
        {(route.fields && route.fields.pageTitle && route.fields.pageTitle.value) || 'Page'}
      </title>
    </Helmet>

    <VisitorIdentification />

    <BootCampHeader />
    <div className="container">
      <Placeholder name="jss-main" rendering={route} />
    </div>
  </React.Fragment>
);

const propsAreEqual = (prevProps, nextProps) => {
  if (deepEqual(prevProps.route, nextProps.route)) return true;

  return false;
};

export default React.memo(Layout, propsAreEqual);
