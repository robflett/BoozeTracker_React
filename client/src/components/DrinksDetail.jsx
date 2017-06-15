import React from 'react';

var DrinksDetail = React.createClass({


  getItems: function() {
    return [{id: 1, name: "Guiness", price: 3},
            {id: 2, name: "BrewDog IPA", price: 3},
            {id: 3, name: "Laphroig", price: 4}];
  },

  getInitialState: function() {
    return {
      items: this.getItems(),
      cart: []
    }
  },

  addToCart: function(item) {
    var found = false;
    var updatedCart = this.state.cart.map((cartItem) => {
      if (cartItem.name == item.name) {
        found = true;
        cartItem.quantity++;
        return cartItem;
      } else {
        return cartItem;
      }
    });
    
    if (!found) { updatedCart.push({id: item.id, name: item.name, price: item.price, quantity: 1}) }
    
    this.setState({
      cart: updatedCart
    });
  },

  render: function(){
    return (
      <div>
        <nav>
          <Cart cart={this.state.cart} />
        </nav>
          <div className="Products">  
            {this.state.items.map((item) => {
              return <Product details={item} addToCart={this.addToCart} />
            })}
          </div>
      </div>
    );
  }
});

var Cart = React.createClass({
  getInitialState: function() {
    return {
      open: false
    }
  },

  openCart: function() {
    this.setState({
      open: !this.state.open
    })
  },

  render: function() {
    return (
      <div className={"Cart " + (this.state.open ? "Cart-Open" : "")} onClick={this.openCart} >
        <p className="Title">My Round...</p>
        <div>
        {this.props.cart.length > 0 ? this.props.cart.map((item) => {
          return <p>{item.name}{item.quantity > 1 ? <span> {item.quantity}</span> : ''}</p> }) : <p>Empty</p>}
        </div>
      </div>
    );
  }
});

var Product = React.createClass({
  addToCart: function() {
    this.props.addToCart(this.props.details);
  },

  render: function() {
    let item = this.props.details;
    return (
      <div className="Product" onClick={this.addToCart}>
        <p>{item.name}</p>
        <p>{item.price}</p>
      </div>
    );
  }
});



export default DrinksDetail;