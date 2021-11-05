import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import LazyLoad from 'react-lazy-load';
export default function LazyLoadingImage(props) {

    return (
        <LazyLoadImage
            threshold={100}
            delayMethod={"throttle"}
            delayTime={10}

            {...props}
        />
    );

    /*return (
        <LazyLoad once >
            <img {...props} />
        </ LazyLoad>
    )*/
}
