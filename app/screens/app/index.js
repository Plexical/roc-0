// React Hot Reload does not support stateless function components as of now
/* eslint-disable react/prefer-stateless-function */
import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import styles from './style.scss';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    let helmet;
    if (location.pathname.startsWith('/tests')) {
      helmet = (
        <Helmet link={[{
          rel: 'icon', href: '/favicon.png',
        },
                       {rel:'stylesheet', href: 'mocha/mocha.css'}
        ]}
        script={[{src: '/mocha/mocha.js'}]} /> )
    } else {
      helmet = <Helmet link={[{rel: 'icon', href: '/favicon.png'}]} />
    }
    return (
      <div className={styles.main}>
        {helmet}
        <Navbar />
        { this.props.children }
        <Footer />
      </div>
    );
  }
}
