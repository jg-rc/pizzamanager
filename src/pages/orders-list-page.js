import React, { Component } from 'react';
import { connect } from 'react-redux';
import OrdersList from '../components/orders-list';
import { fetchOrders } from '../actions/orders-actions';

class OrdersListPage extends Component {
    componentDidMount() {
        this.props.fetchOrders();
      }
    render() {
        return (
        <div>
            <h1>Lista de ordenes</h1>
            <OrdersList orders={this.props.orders}/>
        </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        orders : state.ordersStore.orders
    }
  }
  
export default connect(mapStateToProps, {fetchOrders})(OrdersListPage);
