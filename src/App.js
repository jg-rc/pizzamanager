import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import OrdersListPage from './pages/orders-list-page';
import OrdersFormPage from './pages/orders-form-page';

class App extends Component {
  render() {
    return (
      <Container>
        <div className="ui two item menu">
          <NavLink className="item" activeClassName="active" exact to="/">
            Contacts List
          </NavLink>
          <NavLink className="item" activeClassName="active" exact to="/orders/new">
            Add Contact
          </NavLink>
        </div>
        <Route exact path="/" component={OrdersListPage}/>
        <Route path="/orders/new" component={OrdersFormPage}/>
        <Route path="/orders/edit/:_id" component={OrdersFormPage}/>
      </Container>
    );
  }
}

export default App;