import React from 'react';
import PubDetail from './PubDetail';

class PubSelector extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      selectedIndex: undefined
    };
  }

  handleChange(event){
    var newIndex = event.target.value;
    this.setState({selectedIndex: newIndex});

    var selectedPub = this.props.pubs[newIndex];
    this.props.selectPub(selectedPub);
  }

  render() {
    var options = this.props.pubs.map((pub, index) => {
      return <option value={index} key={index}>{pub.name}</option>;
    });

    return (
      <select id="pubs" value={ this.state.selectedIndex } onChange={ this.handleChange.bind(this) }>
        { options }
      </select>
    );
  }
}

export default PubSelector;