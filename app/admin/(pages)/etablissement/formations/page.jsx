import Link from "next/link"
import styles from '@/style/admin/formations.module.css'
import { FaMagnifyingGlass, FaPlus } from "react-icons/fa6"
import FormationRaw from "@/components/admin/FormationRaw"

export const metadata = {
    title: "ISI | Etablissement | Formations"
}

export  default  function Formations(){
    return (
        <section className={styles.section}>
            <div className={styles.header}> 
                <Link href="/admin/etablissement">Retour</Link>
                <div className={styles.search}>
                    <FaMagnifyingGlass size={20}/>
                    <input type="text" placeholder="Recherchez une formation..."/>
                </div>
                <select name="" id="">
                    <option value='scientifique'>
                        Scientifique
                    </option>
                    <option value='litteraire'>
                        Litteraire
                    </option>
                </select>
            </div>

            <div className={styles.tableHeader}>
                <h2>Formation Scientifique</h2>
                <button><FaPlus/> ajouter</button>
            </div>

            <div className={styles.tableContent}>
                <FormationRaw formation={{title:"Ingénierie Informatique"}}/>
                <FormationRaw formation={{title:"Ingénierie Bio-Médicale"}}/>
                <FormationRaw formation={{title:"Ingénierie Pétrolière"}}/>
                <FormationRaw formation={{title:"Ingénierie QHSE"}}/>
            </div>
        </section>
    )
}