import React, { Component } from 'react';
import { connect } from 'react-redux';
import OrdersList from '../components/orders-list';
import { fetchOrders, deleteOrders } from '../actions/orders-actions';
import { Pagination } from 'semantic-ui-react'



/**
 * 
 * list class component in charge of show orders list
 *
 *
 */
class OrdersListPage extends Component {
    state = {
        activePage: 1,
        boundaryRange: 1,
        siblingRange: 1,
        pageSize: 6,
    }
    componentDidMount() {
        this.props.fetchOrders(this.state);
    }
    handlePaginationChange = (e, { activePage, }) => { 
        this.setState({ activePage })
        this.props.fetchOrders({activePage,pageSize:this.state.pageSize});
    }
    render() {
        const {
            activePage,
            boundaryRange,
            siblingRange,
            pageSize
        } = this.state
        
        const {
            total
        } = this.props

        let totalPages = Math.ceil(total / pageSize); // round up the float number 
        return (
        <div>
            <h1>Lista de ordenes</h1>
                <OrdersList orders={this.props.orders} deleteOrders={this.props.deleteOrders} />
                <Pagination
                    activePage={activePage}
                    boundaryRange={boundaryRange}
                    onPageChange={this.handlePaginationChange}
                    size='mini'
                    siblingRange={siblingRange}
                    totalPages={totalPages}
                />
        </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        orders: state.ordersStore.orders,
        total: state.ordersStore.total
    }
  }
  
export default connect(mapStateToProps, {fetchOrders,deleteOrders})(OrdersListPage);
