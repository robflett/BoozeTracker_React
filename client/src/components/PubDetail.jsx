import React from 'react';

class PubDetail extends React.Component {
  render(){
    if(!this.props.pub){
      return null;
    }
    return (
      <h3>{this.props.pub.name}</h3>
    );
  }
}

export default PubDetail;