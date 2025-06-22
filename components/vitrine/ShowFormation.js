'use client'

import  styles from '@/style/components/showFormation.module.css'
import  CardFormation from '@/components/vitrine/CardFormation'
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

function ShowFormation({formations}){
    const responsive = {
        bigDesktop: {
            breakpoint: { max: 3000, min: 1600 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 1600, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 3,
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
                <h2>{"Nos formations"}</h2>
                <h5>{"Trouvez la meilleur formation pour vous !"}</h5>
            </div>
            <div className={styles.slider}>
                <Carousel responsive={responsive} infinite autoPlay containerClass={styles.carouselContainer}>
                {
                    formations.map(formation => <CardFormation key={formation.id} formation={formation}/>)
                }
                </Carousel>
            </div>
        </section>
    )
}

export default ShowFormation;