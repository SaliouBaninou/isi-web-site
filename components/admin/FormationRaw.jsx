import { FaPencil } from "react-icons/fa6";
import { FiTrash2 } from "react-icons/fi";
import styles from '@/style/admin/components/FormationRaw.module.css'

export default function FormationRaw({formation}){
    return (
        <div className={styles.raw}>
            <h3>{formation.title}</h3>
            <div className={styles.buttons}>
                <button><FaPencil/></button>
                <button><FiTrash2/></button>
            </div>
        </div>
    )
}