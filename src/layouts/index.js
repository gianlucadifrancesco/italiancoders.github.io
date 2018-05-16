/* global __PATH_PREFIX__ */
/* global __PREFIX_PATHS__ */

import React from 'react';
import Helmet from 'react-helmet';

import './index.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import favicon from '../assets/favicon.png';

class Template extends React.Component {
  render() {
    const { children } = this.props;

    // let rootPath = '/';
    if (typeof __PREFIX_PATHS__ !== 'undefined' && __PREFIX_PATHS__) {
      rootPath = `${__PATH_PREFIX__}/`;
    }

    return (
      <div>
        <Helmet
          title="Italian Coders"
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
          ]}
        />
        <Header />
        {children()}
        <Footer />
      </div>
    );
  }
}

export default Template;
