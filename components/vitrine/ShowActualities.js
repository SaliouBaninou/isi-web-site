'use client'

import  styles from '@/style/components/ShowActuality.module.css'
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import CardActuality from "@/components/vitrine/CardActuality";

function ShowActualities({actualities}){
    const responsive = {
        bigDesktop: {
            breakpoint: { max: 3000, min: 1600 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 1600, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 2,
        },
        minTablet: {
            breakpoint: { max: 768, min: 480 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 480, min: 0 },
            items: 1,
        },
    };
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <p>{"Institut Supérieur d'Ingénierie"}</p>
                <h2>{"Nos Actualités"}</h2>
                <h5>{"Les toutes dernière actualités de l’établissement"}</h5>
            </div>
            <div className={styles.slider}>
                <Carousel responsive={responsive} infinite autoPlay containerClass={styles.carouselContainer}>
                    {
                        actualities.map((actuality, index) => <CardActuality key={index} index={index} actuality={actuality}/>)
                    }
                </Carousel>
            </div>
        </section>
    )
}

export default ShowActualities;