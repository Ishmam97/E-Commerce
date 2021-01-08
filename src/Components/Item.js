import React from 'react';
import { OverlayTrigger } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import {useSpring, animated} from 'react-spring'

function addToCart() {
  return(
    <div>
      <p> Item Added!</p>
    </div>
  );
}

function Item() {
  

  return (
    <div className="App">
      <Card style= {{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>         
          <Card.Title> PlayStation 5 1 TB SSD</Card.Title>
          <Card.Subtitle> Video Games and Consoles </Card.Subtitle>
          <Card.Text>
            The newly launched next generation console for this decade. 
          </Card.Text>  
        </Card.Body>
        <div>
          <Button 
            variant="outline-primary" 
            onClick={addToCart} 
          >
            Add to Cart
          </Button>
        </div>
      </Card>
      
      
    </div>
    
  );
}




export default Item;
  