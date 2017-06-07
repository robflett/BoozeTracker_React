import React from 'react';
import PubSelector from '../components/PubSelector';
import PubDetail from '../components/PubDetail';



class RoundContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pubs: [],
      thisPub: null
    };
  }

    setThisPub(pub){
      this.setState({ thisPub: pub });
    }

    render(){
      return (
        <div>
          <h2>Booze Tracker</h2>
          <PubSelector pubs={this.state.pubs} selectPub={this.setThisPub.bind(this)} />
          <PubDetail pub={this.state.thisPub} />
        </div>
      );
    }
  }

 export default RoundContainer;