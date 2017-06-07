import React from 'react';

class PubDetail extends React.Component {
  render(){
    if(!this.props.pub){
      return null;
    }
    return (
      <div>
        <p>
          <img src={this.props.pub.image_url} />
        </p>
        <h2>{this.props.pub.address}</h2>
      </div>
    );
  }
}

export default PubDetail;