import React from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';

const Review = () => {
    const datas = [
        {
            "ïd": 1,
            "title": "Awesome Aroma",
            "description": "You will definitely be a fan of the design & aroma of your coffee",
            "img": "https://imagizer.imageshack.com/img923/3268/HYpIV8.png"
        },
        {
            "ïd": 2,
            "title": "High Quality",
            "description": "We served the coffee to you maintaining the best quality",
            "img": "https://imagizer.imageshack.com/img923/6134/sVqPA2.png"
        },
        {
            "ïd": 3,
            "title": "Pure Grades",
            "description": "The coffee is made of the green coffee beans which you will love",
            "img": "https://imagizer.imageshack.com/img923/3049/KbqoPb.png"
        },
        {
            "ïd": 4,
            "title": "Proper Roasting",
            "description": "Your coffee is brewed by first roasting the green coffee beans",
            "img": "https://imagizer.imageshack.com/img924/9577/zdPwK0.png"
        },
    ]
    return (
        <div className='mt-20 grid grid-cols-4 gap-3 p-5 mb-20'>
            {
                datas.map( data => <ReviewCard key={data.id} data={data}></ReviewCard>)
            }
        </div>
    );
};

export default Review;