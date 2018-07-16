import React from 'react';
import { Card } from 'semantic-ui-react';
import OrderCard from './order-card';

export default function OrdersList({orders}){
    const cards = () => {
        return orders.map(order => {
          return (
            <OrderCard key={order._id} order={order}/>
          )
        })
      }
      return (
        <Card.Group>
          { cards() }
        </Card.Group>
      )
}