// ==== Node Modules
import React from 'react';
// ==== Local Files

class PageContent extends React.Component {

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default PageContent;