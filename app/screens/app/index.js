// React Hot Reload does not support stateless function components as of now
/* eslint-disable react/prefer-stateless-function */
import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import styles from './style.scss';

const gfontBase = 'https://fonts.googleapis.com';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <div className={styles.main}>
        <Helmet
            script={[
              {"src": "https://code.jquery.com/jquery-1.10.2.min.js",
               "type": "text/javascript"},
              {"src": "/semantic/semantic.min.js",
               "type": "text/javascript"},
            ]}
            link={[
              {rel: 'icon', href: '/favicon.png'},
              {rel: 'stylesheet',
               href: `${gfontBase}/icon?family=Material+Icons`},
              {rel: 'stylesheet',
               href: '/semantic/semantic.min.css'},
              {rel: 'stylesheet',
               href: `${gfontBase}/css?family=Roboto&subset=latin,latin-ext`},
            ]}
        />
        <Navbar />
        { this.props.children }
        <Footer />
      </div>
    );
  }
}
