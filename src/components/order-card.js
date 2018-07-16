import React from 'react';
import { Card, Button, Icon } from 'semantic-ui-react'

export default function OrderCard({order, deleteOrder}) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          <Icon name='user outline'/> {order.nombre}
        </Card.Header>
        <Card.Description>
          <p><Icon name='phone'/> {order.telefono}</p>
          <p><Icon name='mail outline'/> {order.sabor}</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green">Edit</Button>
          <Button basic color="red">Delete</Button>
        </div>
      </Card.Content>
    </Card>
  )
}
