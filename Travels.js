import React from "react";
import data from "./data";
export default function Travels(){
    const locations = data.map(location =>{
        return (
            <div className = "card">
                <img className = "image" src={location.imageUrl} alt="Could not display image" />
                <div className = "text">
                    <h2>{location.location}</h2>
                    <a href={location.googleMapsUrl}>Google Maps Link</a>
                    <h1>{location.title}</h1>
                    <p>{location.startDate} - {location.endDate}</p>
                    <p>{location.description}</p>
                </div>
                
                
            </div>
        )
    
    })
    return (
        <div>
            {locations}
        </div>
    )
}