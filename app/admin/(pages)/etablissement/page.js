import styles from "@/style/admin/etablissement.module.css";
import StatCard from "@/components/admin/StatCard";
import {FaEye, FaRegBell, FaUser, FaUserPlus} from "react-icons/fa";
import {formatNumber} from "@/utilis/Calculs";
import Link from "next/link";

const links = [
    {
        title: 'Nos formations',
        href: '/admin/etablissement/formations'
    },
    {
        title: 'Nos contacts',
        href: '/admin/etablissement/contacts'
    },
    {
        title: 'Préinscriptions accordées',
        href: '/admin/etablissement/pre-inscriptions'
    },
    {
        title: 'Abonnés ISI',
        href: '/admin/etablissement/abonnes'
    }
]

export const metadata = {
    title: 'ISI | Etablissement',
    description: '...',
}

export default function Etablissement(){
    return (
        <>
            <div className={styles.content}>
                <div className={styles.cardsStats}>
                    <StatCard
                        icon={<FaEye/>}
                        title={"Pages vues"}
                        total={formatNumber(1000)}
                        oldData={200}
                        newData={700}
                    />

                    <StatCard
                        icon={<FaUser />}
                        title={"Visiteurs annuels"}
                        total={formatNumber(650000)}
                        oldData={300000}
                        newData={350000}
                    />

                    <StatCard
                        icon={<FaUserPlus/>}
                        title={"Nouvelles inscriptions"}
                        total={formatNumber(22000)}
                        oldData={10000}
                        newData={12000}
                    />

                    <StatCard
                        icon={<FaRegBell />}
                        title={"Abonnements"}
                        total={formatNumber(11000)}
                        oldData={6000}
                        newData={5000}
                    />

                </div>

                <div className={styles.linksDiv}>
                    {
                        links.map((link, index) => (
                            <Link href={link.href} key={index}>{link.title}</Link>
                        ))
                    }
                </div>
            </div>
        </>
    )
}