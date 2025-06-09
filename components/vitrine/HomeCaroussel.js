'use client';

import Image from "next/image";
import '@/style/components/cardHomeCarousel.css'
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { FaAngleRight, FaRegStar } from "react-icons/fa6";
import Link from "next/link";

function HomeCaroussel({ data = [] }) {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 768, min: 425 },
            items: 2,
        },
        smallMobile: {
            breakpoint: { max: 425, min: 0 },
            items: 1,
        },
    };

    return (
        <div className="carousel-container carousel-container-home">
        <Carousel responsive={responsive} infinite autoPlay>
            {data.map((item, index) => (
            <div key={index} className="carousel-item carousel-item-div">
                <Image src={item?.image} alt={item?.title} width={240} height={240} className="carousel-image" />
                    <div className="carousel-item-text-content">
                        <div className="carousel-item-avis">
                            <span>Avis</span>
                            <span className="carousel-item-note">
                                <FaRegStar size={15}/>
                                {item?.note}
                            </span>
                        </div>
                        <h3 className="carousel-item-title">{item?.title}</h3>
                        <p className="carousel-item-description">{item?.description}</p>
                        <Link href={'#'}>Voir plus <FaAngleRight /> </Link>
                    </div>
            </div>
            ))}
        </Carousel>
        </div>
    );
}

export default HomeCaroussel;
