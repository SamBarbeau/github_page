import React, { useState } from 'react';

const dishes = [
    {
        name: 'Fajita Tacos',
        review: 'Tacos are my favorite food, so this was obviously a hit. Used chicken thighs instead of breasts because they are juicier (cheaper).',
        image: `${process.env.PUBLIC_URL}/img/food/fajita_tacos.png`,
    },
    {
        name: 'fried_rice',
        review: 'My second favorite food, but first time putting a fried egg on top. It was a great addition. Probably the best fried rice I\'ve made.',
        image: `${process.env.PUBLIC_URL}/img/food/fried_rice.png`,
    },
    {
        name: 'Gnocchi',
        review: 'First time making any pasta from scratch. Used a tomato basil sauce. Took longer than expected, but worth it.',
        image: `${process.env.PUBLIC_URL}/img/food/gnocchi.png`,
    },
    {
        name: 'Meatballs',
        review: 'First time making meatballs. Made them to accompany the gnocchi, and topped with the same tomato basil sauce. Super good, superprisingly easy.',
        image: `${process.env.PUBLIC_URL}/img/food/meatballs.png`,
    },
    {
        name: 'Shredded Chicken',
        review: 'Where have crock pots been all my life? Chicken thigh, taco seasoning, and salsa. 6 hours later, shredded chicken for tacos. So easy, so juicy, so good.',
        image: `${process.env.PUBLIC_URL}/img/food/shredded_chicken.png`,
    },
    {
        name: 'Spaghetti',
        review: 'Spaghetti is spaghetti. It was delicious, but should\'ve let my sauce simmer longer.',
        image: `${process.env.PUBLIC_URL}/img/food/spaghetti.png`,
    },
];

const Food = () => {
    const [popupImage, setPopupImage] = useState(null);

    const handleDoubleClick = (image) => {
        setPopupImage(image);
    };

    const closePopup = () => {
        setPopupImage(null);
    };

    return (
        <div className="container mx-auto p-4">
            <table className="min-w-full bg-stone-50 border-4 border-tertiary table-fixed">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b-2 border-tertiary w-2/6">Image</th>
                        <th className="py-2 px-4 border-b-2 border-tertiary w-1/6">Name</th>
                        <th className="py-2 px-4 border-b-2 border-tertiary w-3/6">Review</th>
                    </tr>
                </thead>
                <tbody>
                    {dishes.map((dish, index) => (
                        <tr key={index} className="hover:bg-stone-100">
                            <td className="py-20 px-4 border-b-2 border-tertiary text-center">
                                <img 
                                    src={dish.image} 
                                    alt={dish.name} 
                                    className="max-w-60 mx-auto border-tertiary border-2 cursor-pointer" 
                                    onClick={() => handleDoubleClick(dish.image)} 
                                />
                            </td>
                            <td className="py-6 px-4 border-b-2 border-tertiary text-center">{dish.name}</td>
                            <td className="py-6 px-4 border-b-2 border-tertiary break-words text-center">{dish.review}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {popupImage && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center" onClick={closePopup}>
                    <div className="flex items-center justify-center p-4 rounded">
                        <img src={popupImage} alt="Popup" className="h-1/2 w-1/2" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Food;