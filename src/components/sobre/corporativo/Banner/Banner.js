import React, { Component } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Itembanner from './Itembanner.js'

class Banner extends Component {
    state = {
        activeSilde: 0
    };

    handleSlideSelect = () => { };
    render() {
        const responsive = {
            desktop: {
                breakpoint: {
                    max: 3000,
                    min: 1024
                },
                items: 1,
                partialVisibilityGutter: 40
            },
            mobile: {
                breakpoint: {
                    max: 464,
                    min: 0
                },
                items: 1,
                partialVisibilityGutter: 30
            },
            tablet: {
                breakpoint: {
                    max: 1024,
                    min: 464
                },
                items: 1,
                partialVisibilityGutter: 30
            }
        };

        const list = [
            {
                id: 1,
                image: 'rectangle 91.png',
                titulo: '1976',
                description: 'En 1976, se fundó SUZUKI Motor Handels GmbH en Munich, inicialmente para la venta de motocicletas Suzuki y productos marinos.',
            },
            {
                id: 2,
                image: 'rectangle 91.png',
                titulo: 'Siente el poder sobre ruedas',
                description: 'New Vitara es la expresión de Suzuki que reúne esas características que la hacen única: libertad y expresión.',
            },
            {
                id: 3,
                image: 'rectangle 91.png',
                titulo: '1976',
                description: 'En 1976, se fundó SUZUKI Motor Handels GmbH en Munich, inicialmente para la venta de motocicletas Suzuki y productos marinos.',
            }
        ]

        const items = list.map((item, index) => (<Itembanner key={index} item={item} />))


        const CustomDot = ({ onMove, index, onClick, active }) => {
            var content;
            content = <>
                <div className={active ? "active line-dot" : "inactive line-dot"}></div>
            </>

            return (
                <li
                    className="d-flex"
                    onClick={() => onClick()}
                >
                    { content}
                </li>
            );
        };

        return (
            <div className="">

                <Carousel
                    responsive={responsive}
                    additionalTransfrom={0}
                    arrows={false}
                    autoPlay
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className="gallery_home"
                    dotListClass="dots col-6"
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={0}
                    renderButtonGroupOutside={false}
                    renderDotsOutside
                    showDots
                    partialVisible={false}
                    slidesToSlide={1}
                    customDot={<CustomDot />}
                    swipeable>
                    {items}
                </Carousel>
            </div>

        )
    }
}

export default Banner;