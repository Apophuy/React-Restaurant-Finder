import React, { Component } from 'react'
import "./index.css";
import { ratingsColor } from "../../utils/ratingsColor";

const RestaurantPage = (props) =>  {
    console.log(props)

    const restaurant_name = "Zebra Asian Noodle Bar"; 
    const average_cost_for_two = 800;
    const aggregate_rating = "3.9"; 
    const rating_text = "Good";
    const currency = "Kč"; 
    const votes = "37"; 
    const cuisines= "Sushi, Chinese, Asian"; 
    const establishment = ["Casual Dining"]; 
    const highlights = ["Credit Card", "Takeaway Available", "Lunch", "Delivery", "Dinner", "Disabled Friendly", "Wifi"]; 
    const address = "Melantrichova 5, Staré Město, Praha 1"; 
    const locality = "Praha 1"; 
    const city = "Praha 1"; 
    const latitude = "50.0852666667"; 
    const longitude = "14.4212722222"; 
    const phone_numbers = "+420 777873333"; 
    const timings = "11:00 to 01:00 (Mon-Sun)"


        return (
            <div className='content-container content'>
        
            <img src="https://b.zmtcdn.com/data/res_imagery/16506533_RESTAURANT_d6d0bdeed6dd655468b2fe6130b0db08.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A" alt='...' className='featured-image' />
            <h3 className='restaurant-name'>
                {restaurant_name}
            </h3>

    
            <span className={ratingsColor(aggregate_rating)}>{aggregate_rating}</span>
            <span> ({votes} votes)</span>
            

            <hr />
    
            <p><strong>Cuisines: </strong>{cuisines}</p>
            <p><strong>Cost for two:  </strong> {currency}{average_cost_for_two}</p>
            <hr />
    
            <p><strong>Address:</strong></p>
            <p>{address}</p>
            <hr />
            
        </div>
        )
}

export default RestaurantPage;
