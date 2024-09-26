import React from 'react';

const dishes = [
    {
        name: 'Spaghetti Carbonara',
        image: 'path/to/spaghetti-carbonara.jpg',
    },
    {
        name: 'Chicken Alfredo',
        image: 'path/to/chicken-alfredo.jpg',
    },
    {
        name: 'Beef Tacos',
        image: 'path/to/beef-tacos.jpg',
    },
];

const Food = () => {
    return (
        <div className="food-gallery">
            {dishes.map((dish, index) => (
                <div key={index} className="food-item">
                    <img src={dish.image} alt={dish.name} className="food-image" />
                    <h3>{dish.name}</h3>
                </div>
            ))}
        </div>
    );
};

export default Food;