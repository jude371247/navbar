import React, { useRef, useEffect, useState } from 'react';
import './SlidingProducts.css';

const SlidingProducts = () => {
    const containerRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const container = containerRef.current;
        let intervalId;

        const startSliding = () => {
            intervalId = setInterval(() => {
                if (!isPaused) {
                    container.scrollLeft += 1;
                    if (container.scrollLeft >= container.scrollWidth / 2) {
                        container.scrollLeft = 0;
                    }
                }
            }, 10);
        };

        startSliding();

        return () => clearInterval(intervalId);
    }, [isPaused]);

    return (

        <div className="our-products">
            <h1>Our Products</h1>
        <div className="sliding-container" 
        ref={containerRef}
        onMouseEnter={() => setIsPaused(true)} 
        onMouseLeave={() => setIsPaused(false)}>

            <div className="sliding-content">
                <div className="product-item1"></div>
                <div className="product-item2"></div>
                <div className="product-item3"></div>
                <div className="product-item4"></div>
                <div className="product-item5"></div>
                <div className="product-item6"></div>


                <div className="product-item7"></div>
                <div className="product-item8"></div>
                <div className="product-item9"></div>
                <div className="product-item10"></div>
                <div className="product-item11"></div>
                <div className="product-item12"></div>

                <div className="product-item13"></div>
                <div className="product-item14"></div>
                <div className="product-item15"></div>
                <div className="product-item16"></div>
                <div className="product-item17"></div>
                <div className="product-item18"></div>
            </div>
        </div>
            </div>
    );
    
    
};
export default SlidingProducts;
