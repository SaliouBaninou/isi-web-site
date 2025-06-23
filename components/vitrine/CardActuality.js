import Link from "next/link";
import Image from "next/image";
import {FaClock} from "react-icons/fa";
import styles from '@/style/components/card-actuality.module.css'

function CardActuality({ actuality, index }) {
    const borderClass = styles[`borderColor${(index % 5) + 1}`]; // borderColor1 à borderColor5

    return (
        <div className={`${styles.card} ${borderClass}`}>
            <div className={styles.cardImage}>
                <Image src={actuality.image} alt={'Photo image'} width={300} height={240}/>
            </div>
            <div className={styles.cardContent}>
                <h3>{actuality.title}</h3>
                <div className={styles.dateLink}>
                    <div>
                        <FaClock/>
                        {actuality.created_at}
                    </div>
                    <Link href="#">Voir plus</Link>
                </div>
            </div>
        </div>
    );
}

export default CardActuality;