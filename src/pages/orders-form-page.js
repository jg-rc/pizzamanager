import React, { Component} from 'react';
import { Redirect } from 'react-router';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { newOrder, saveOrder, fetchOrder, updateOrder } from '../actions/orders-actions';
import OrdersForm from '../components/orders-form';


/**
 * 
 * form page in charge of show the create and update form
 *
 *
 */
class OrdersFormPage extends Component {

  state = {
    redirect: false
  }

  componentDidMount() {
    const { _id } = this.props.match.params;
    if(_id){
        this.props.fetchOrder(_id)
    } else {
        this.props.newOrder();
    }
  }

  submit = (order) => {
    if(!order._id) {
      return this.props.saveOrder(order)
        .then(response => this.setState({ redirect:true }))
        .catch(err => {
           throw new SubmissionError(this.props.errors)
         })
    } else {
      return this.props.updateOrder(order)
        .then(response => this.setState({ redirect:true }))
        .catch(err => {
           throw new SubmissionError(this.props.errors)
         })
    }
  }

  render() {
    return (
      <div>
        {
          this.state.redirect ?
          <Redirect to="/orders/list" /> :
          <OrdersForm order={this.props.order} loading={this.props.loading} onSubmit={this.submit} />
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    order: state.ordersStore.order,
    errors: state.ordersStore.errors
  }
}


export default connect(
    mapStateToProps, { newOrder, saveOrder, fetchOrder, updateOrder })(OrdersFormPage);
    
