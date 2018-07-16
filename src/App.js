import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container,Header } from 'semantic-ui-react';
import OrdersListPage from './pages/orders-list-page';
import OrdersFormPage from './pages/orders-form-page';
import Home from './pages/home'
import About from './pages/about'
import Terms from './pages/terms'



const HeaderLogo = () => (
 <Header as='h2' image='https://img.clipartxtras.com/df853d441960da671cbe5a4168229982_whole-pepperoni-pizza-clipart-38-pepperoni-clipart-black-and-white_1203-1159.gif' content='Pizza admin' />
)
    /**
     * App class react router in change of routes for all pages.
     *
     *
     */
class App extends Component {
  render() {
    return (
      <Container>
         <NavLink  activeClassName="selected" to="/orders/list">
          <HeaderLogo />
         </NavLink>
        <div className="ui  three item menu">
          <NavLink className="item" activeClassName="active" exact to="/">
            Inicio
          </NavLink>
          <NavLink className="item" activeClassName="active" exact to="/orders/list">
            Listar Ordenes
          </NavLink>
          <NavLink className="item" activeClassName="active" exact to="/orders/new">
            Agregar Orden
          </NavLink>
        </div>
        <Route exact path="/" component={Home} />
        <Route exact path="/terms" component={Terms} />
        <Route exact path="/about" component={About}/>
        <Route exact path="/orders/list" component={OrdersListPage}/>
        <Route path="/orders/new" component={OrdersFormPage}/>
        <Route path="/orders/edit/:_id" component={OrdersFormPage} />
        <div className="footer">
        <div className="footer-links">
            <NavLink to="/terms">
              Terminos y condiciones
            </NavLink>
            <span className="divider" />
            <NavLink   to="/about">
              Acerca 
            </NavLink>
          </div>
          <div className="copyright">
            imagen de logo tomada desde <a href="https://clipartxtras.com/">clipartxtras.com</a> todos los derechos reservados © 
          </div>
        </div>
      </Container>
    );
  }
}

export default App;