import React, { Component } from 'react';



import './App.css';
import ProductDisplay from './Components/ProductDisplay/ProductDisplay';


class App extends Component {
  constructor(props){
    super(props);
   
}


  render() {
    return (
      <div className="App">
        <ProductDisplay checkOutTitle="Promo Offer" LabelValue="Promo" newLabelValue="Other"/>
        {/* <ItemDisplay/> */}
      </div>
    );
  }
}

export default App;
