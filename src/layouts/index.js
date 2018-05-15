import React from 'react';
import './index.css'
import Header from '../components/Header/Header';

class Template extends React.Component {
  render() {
    const { children } = this.props

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <div>
        <Header />
        {children()}
      </div>
    )
  }
}

export default Template
