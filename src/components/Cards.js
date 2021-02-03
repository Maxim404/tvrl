import React from 'react';
import CardItem from "./CardItem";
import './Cards.css';
import img9 from '../images/img-9.jpg';
import img2 from '../images/img-2.jpg';

function Cards(props) {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src={img9}
                        text="Explore the hidden waterfall
                        deep inside the Amazon Jungle"
                        label='Adventure'
                        patch='/services'
                        />
                        <CardItem
                            src={img2}
                            text="Travel through the Islands of Bali in a Private
                            Cruise"
                            label='Luxury'
                            patch='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src={img9}
                            text="Explore the hidden waterfall
                        deep inside the Amazon Jungle"
                            label='Adventure'
                            patch='/services'
                        />
                        <CardItem
                            src={img2}
                            text="Travel through the Islands of Bali in a Private
                            Cruise"
                            label='Luxury'
                            patch='/services'
                        />
                        <CardItem
                            src={img2}
                            text="Travel through the Islands of Bali in a Private
                            Cruise"
                            label='Luxury'
                            patch='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;