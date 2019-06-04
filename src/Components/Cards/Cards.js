import React from 'react';
import Card from './Card/Card'
import { Container, Row } from 'react-bootstrap';


const Cards = (props) => {
    let cards = null;

    if(props.autocomplete){
        cards = props.autocomplete.map((detail,i)=>(
                    <Card 
                        key={i}
                        name={detail.structured_formatting.main_text}
                        onClickHandler={props.onShowWeatherForLocation}
                    />));
    }

    if(cards == null){
        cards = (<div className="text-center">
                    <h5 className="display-4">Sorry! No Match Found</h5>
                </div>)
    }

    return (
            <Container>
                <Row>
                    {cards}
                </Row>
            </Container>
            
            );

}

export default Cards;