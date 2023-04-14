import React from 'react';
import "./photo.css"

const Photo = (props) => {
    console.log(props.photo)
    const {title, url, thumbnailUrl} = props.photo
    return (
        <div className='photo-container'>
            <h1>{title}</h1>
            <img src={thumbnailUrl} alt="" />
        </div>
    );
};

export default Photo;