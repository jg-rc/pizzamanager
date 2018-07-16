import React, { Component} from 'react';
import { Redirect } from 'react-router';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { newOrder, saveOrder } from '../actions/orders-actions';
import OrdersForm from '../components/orders-form';


class OrdersFormPage extends Component {

  state = {
    redirect: false
  }

  componentDidMount() {
    this.props.newOrder();
  }

    submit = (order) => {
      console.log(this)
    return this.props.saveOrder(order)
      .then(response => this.setState({ redirect:true }))
      .catch(err => {
         throw new SubmissionError(this.props.errors)
       })
  }

  render() {
    return (
      <div>
        {
          this.state.redirect ?
          <Redirect to="/" /> :
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

export default connect(mapStateToProps, {newOrder, saveOrder})(OrdersFormPage);