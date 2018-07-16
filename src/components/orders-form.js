import React, { Component } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';

const validate = (values) => {
    const errors = {};
    if(!values.nombre) {
      errors.nombre= {
        message: 'debes de agregar un nombre de cliente'
      }
    }
    if(!values.telefono) {
      errors.telefono = {
        message: 'Necesitas dar un numero de telefono'
      }
    } else if(!/^\+(?:[0-9] ?){6,14}[0-9]$/.test(values.telefono)) {
      errors.telefono = {
        message: 'el numero debe estar en formato internacional'
      }
    }
    if(!values.direccion) {
      errors.direccion = {
        message: 'La pizza tiene que llegar a algun lugar... agrega una direccion'
      }
    }
    if(!values.sabor) {
      errors.sabor = {
        message: 'una pizza sin sabor 🤔 ... sabor es requerido'
      }
    }else if(!/^[a-zA-Z]+$/.test(values.sabor)) {
      errors.sabor = {
        message: 'ten cuidado ese sabor no es admitido, solo caracteres'
      }
    }
    if(!values.pizza) {
      errors.pizza = {
        message: 'que tamaño la quieres ? '
      }
    }else if(!/^[a-zA-Z]+$/.test(values.pizza)) {
      errors.pizza = {
        message: 'ten cuidado ese tamaño no es admitido, solo caracteres'
      }
    }
    return errors;
  }

  /**
 * 
 * form class component in charge of show a form and validation
 */
class OrdersForm extends Component {

  renderField = ({ input, label, type, meta: { touched, error } }) => (
    <Form.Field className={classnames({error:touched && error})}>
      <label>{label}</label>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span className="error">{error.message}</span>}
    </Form.Field>
  )

  render() {
    const { handleSubmit, pristine, submitting, loading } = this.props;

    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <h1 style={{marginTop:"1em"}}>Agrega una nueva orden</h1>
            <Form onSubmit={handleSubmit} loading={loading}>
                <Field name="nombre" type="text" component={this.renderField} label="Nombre del cliente"/>
                <Field name="telefono" type="text" component={this.renderField} label="Telefono del cliente" />
                <Field name="direccion" type="text" component={this.renderField} label="Direccion" />        
            <Form.Group widths='equal'>
              <Field name="sabor" type="text" component={this.renderField} label="Sabor de la pizza"/>
              <Field name="pizza" type="text" component={this.renderField} label="Tamaño de la Pizza"/>
            </Form.Group>
            <Button primary type='submit' disabled={pristine || submitting}>Guardar</Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
  componentWillReceiveProps = (nextProps) => { // Receive order data Asynchronously
    const { order } = nextProps;
    if(order._id !== this.props.order._id) { // Initialize form only once
      this.props.initialize(order)
    }
  }
}

export default reduxForm({form: 'order',validate})(OrdersForm);