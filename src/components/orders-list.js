import React from 'react';
import { Card } from 'semantic-ui-react';
import OrderCard from './order-card';

export default function OrdersList({orders,deleteOrders}){
    const cards = () => {
        return orders.map(order => {
          return (
            <OrderCard key={order._id} order={order} deleteOrders={deleteOrders} />
          )
        })
      }
      return (
        <Card.Group>
          { cards() }
        </Card.Group>
      )
}