'use client'
import {calculAndCompareDatas} from "@/utilis/Calculs";
import {FaArrowTrendDown, FaArrowTrendUp} from "react-icons/fa6";
import clsx from "clsx";
import styles from '@/style/admin/components/stat-card.module.css'

function StatCard({title, icon, total, oldData, newData}) {
    const {taux, hausse} = calculAndCompareDatas(oldData, newData)
    return (
        <div className={styles.cardStat}>
            <div className={styles.header}>
                {icon}
                <h4>{title}</h4>
            </div>
            <div className={styles.content}>
                <h2 className={styles.value}>{total}</h2>
                <span className={clsx(
                    styles.btnTaux,
                    hausse ? styles.hausse : styles.baisse
                )}>
                    {`${taux}%`}
                    {hausse ? <FaArrowTrendUp/> : <FaArrowTrendDown/>}
                </span>
            </div>
        </div>
    );
}


export  default StatCard;