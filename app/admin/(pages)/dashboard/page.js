import styles from '@/style/admin/dashboard.module.css'
import StatCard from "@/components/admin/StatCard";
import {FaEye, FaRegBell, FaUser, FaUserPlus} from "react-icons/fa";
import {formatNumber} from "@/utilis/Calculs";
export default  function Dashboard(){
    return (
        <>
            <div className={styles.content}>
                <div className={styles.headerDashboard}>
                    <div className={styles.leftHeader}>
                        <h2>Bienvenue Monsieur SALIOU</h2>
                        <p>Gérez eet ou consulté les activités de la plateforme ISI/IDEA</p>
                    </div>
                </div>
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
            </div>
        </>
    )
}