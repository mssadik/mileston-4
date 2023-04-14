import React, { useEffect, useState } from 'react';
import Photo from '../Photo/Photo';
import "./Photos.css"

const Photos = () => {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => setPhotos(data.slice(0, 20))); 
    }, [])
    return (
        <div>
            <h1>Photos: {photos.length}</h1>
            <div className='photos-container'>
                
                {
                    photos.map(photo => <Photo photo = {photo}></Photo>)
                }
            </div>
        </div>
    );
};

export default Photos;