import React, { Component } from 'react';
import './Customer.css';

class Customer extends Component {
  constructor(){
    super();
    this.state = {
      customers : []
    }
  }

  componentDidMount(){
    fetch('http://localhost:5000/api/customers')
    .then(res => res.json())
    .then(customers=>this.setState({customers},()=>
  console.log(customers)))
  }

  render() {
    return (
      <div>
        <h2>Customers</h2>
        <ul>
          {this.state.customers.map(customer =>
            <li key={customer.id}>{customer.firstName} {customer.lastName}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Customer;
