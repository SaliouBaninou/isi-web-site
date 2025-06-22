import  styles from '@/style/components/cardFormation.module.css'
import Image from "next/image";
import Link from "next/link";
function  CardFormation({formation}){
    return (
        <>
            <Link href={'#'} className={styles.cardContainer}>
                <div className={styles.card}>
                    <h3>{formation.title}</h3>
                    <p>{formation.description}</p>
                </div>
                <div className={styles.image}>
                    <Image src={formation.image} alt={formation.title} height={320} width={260}/>
                </div>
            </Link>
        </>
    )
}

export  default CardFormation;