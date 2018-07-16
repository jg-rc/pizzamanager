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
    if(!values.email) {
      errors.email = {
        message: 'You need to provide an Email address'
      }
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = {
        message: 'Invalid email address'
      }
    }
    return errors;
  }

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
                <Field name="nombre" type="text" component={this.renderField} label="Nombre"/>
                <Field name="telefono" type="text" component={this.renderField} label="Telefono" />
                <Field name="direccion" type="text" component={this.renderField} label="Direccion" />        
            <Form.Group widths='equal'>
              <Field name="sabor" type="text" component={this.renderField} label="Sabor"/>
              <Field name="pizza" type="text" component={this.renderField} label="Pizza"/>
            </Form.Group>
            <Button primary type='submit' disabled={pristine || submitting}>Guardar</Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default reduxForm({form: 'order',validate})(OrdersForm);