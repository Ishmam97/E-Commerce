import React, {useState} from 'react';
import { useSpring, animated } from "react-spring";
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import "./css/item.css";


function addToCart() {

}

function Item() {
  const [isShown, setIsShown] = React.useState(false);
  const [visibility, set] = useSpring(() => ({visibility: 'hidden'}))

  const Line = ({ color }) => (
    <hr 
      style = {{
        color: color,
        backgroundColor: color,
        height: 0.2
      }}
    />
  );


  const buttonHov = {
    visibility: "hidden"
  };
  return (
    <div className="item">
      <h1> Most Popular </h1>
      <Line color='grey' />
      <Card 
        style= {{ left: '40px', width: '20rem' , borderRadius: '16px 16px 52px 52px', borderColor: '#0277BD' , color: '#000', boxShadow: '2px 2px 5px #01579B'}}
      >
        <Card.Img variant="top" src="https://gmedia.playstation.com/is/image/SIEPDC/playstation-5-digital-edition-with-dualsense-front-product-shot-01-ps5-en-30jul20?$native--t$" />
        <Card.Body style = {{ background: '#81D4FA', borderRadius: '0px 0px 52px 52px' }}>         
          <Card.Title className="mb-4 h1"> PlayStation 5 1 TB SSD</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"> Video Games and Consoles </Card.Subtitle>
          <Card.Text>
            The newly launched next generation console for this decade. 
          </Card.Text>  
          <Card.Subtitle className="mb-4 bold">
            $499.99
          </Card.Subtitle>
          <div className="buttons"
            onMouseEnter={() => set({visibility: 'visible'})}
            onMouseLeave={() => set({visibility: 'hidden'})}
          >

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
      <Line color='grey' />

    </div>

  );
}




export default Item;

