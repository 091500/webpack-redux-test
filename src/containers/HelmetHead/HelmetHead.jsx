// ==== Node Modules
import React from 'react';
import Helmet from 'react-helmet';

class HelmetHead extends React.Component {
  render() {
    return (
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
      </Helmet>
    );
  }
}

export default HelmetHead;