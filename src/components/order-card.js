import React from 'react';
import { Card, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default function OrderCard({order, deleteOrders}) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          <Icon name='user outline'/> {order.nombre}
        </Card.Header>
        <Card.Description>
          <p><Icon name='phone' /> {order.telefono}</p>
          <p><Icon name='map pin' /> {order.direccion}</p>
          <p><Icon name='food' /> {order.sabor}</p> 
          <p><Icon name='adjust' /> {order.pizza}</p>
                
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
        <div className="ui two buttons">
            <Link to={`/orders/edit/${order._id}`} className="ui basic button green">Editar</Link>
            <Button basic color="red" onClick={() => deleteOrders(order._id)} >Borrar</Button>
        </div>
        </div>
      </Card.Content>
    </Card>
  )
}
