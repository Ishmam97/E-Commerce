import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import "./css/item.css";

function addToCart() {
}

function Item() {
  

  return (
    <div className="App">
      <Card style= {{ width: '20rem' }}>
        <Card.Img variant="top" src="https://gmedia.playstation.com/is/image/SIEPDC/playstation-5-digital-edition-with-dualsense-front-product-shot-01-ps5-en-30jul20?$native--t$" />
        <Card.Body>         
          <Card.Title className="mb-4 h1"> PlayStation 5 1 TB SSD</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"> Video Games and Consoles </Card.Subtitle>
          <Card.Text>
            The newly launched next generation console for this decade. 
          </Card.Text>  
          <Card.Subtitle className="mb-4 bold">
            $499.99
          </Card.Subtitle>
          <div className="buttons">
          <ButtonGroup>
            <Button 
              variant="outline-primary" 
              onClick={addToCart} 
            >
              Add to Cart
            </Button>
            <Button 
              variant="outline-danger" 
              onClick={addToCart} 
            >
              Love
            </Button>
          </ButtonGroup>
          
        </div>
        </Card.Body>
        
      </Card>
      
      
    </div>
    
  );
}




export default Item;
  