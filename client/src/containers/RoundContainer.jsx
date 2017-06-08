import React from 'react';
import PubSelector from '../components/PubSelector';
import PubDetail from '../components/PubDetail';
import DrinksDetail from '../components/DrinksDetail';
import Tabs from '../components/Tabs';
import Pane from '../components/Pane';



class RoundContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pubs: [],
      thisPub: null
    };
  }


  componentDidMount(){
      var url = 'http://localhost:3000/bars';
      var request = new XMLHttpRequest();
      request.open('GET', url);
      
      request.onload = function() {
        if (request.status === 200) {
          var jsonString = request.responseText;
          var data = JSON.parse(jsonString);
          this.setState({ pubs: data, thisPub:data[0] });
        }
      }.bind(this);
      
      request.send();
    }

    setThisPub(pub){
      this.setState({ thisPub: pub });
    }

    render(){
      return (
        <div>
          <h2>Booze Tracker</h2>
          <PubSelector pubs={this.state.pubs} selectPub={this.setThisPub.bind(this)} />
         
            <Tabs selected={0}>
             <Pane label="Pub Info">
               <PubDetail pub={this.state.thisPub} />
             </Pane>
             <Pane label="Drinks!">             
               <DrinksDetail pub={this.state.thisPub} />              
             </Pane>
           </Tabs>
        
        </div>
      );
    }
  }

 export default RoundContainer;