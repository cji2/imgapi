import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    //console.log(props.images);
    /* desstructuring for the props of image */
    /*
    const pics = props.images.map( ({ alt_description, id, urls }) => {
      return (
        <img key={id} alt={alt_description} src={urls.small} />
      );
    });
    */
    const pics = props.images.map( (image) => {
        return (
            <ImageCard key={image.id} image={image} />
        );
    });
    /*
    const pics = props.images.map((image) => {
        return <img key={image.id} alt={image.alt_description} src={image.urls.small} />
    });
    */
    //console.log(pics);

    return <div className="image-list">{pics}</div>;
}

export default ImageList;