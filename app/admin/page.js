import Image from "next/image";
import styles from '@/style/admin/login.module.css'

export default function Page(){
    return (
       <section className={styles.section}>
           <div>
               <Image src={"/login-bg.jpg"} width={1170} height={1200} alt={"Fond page login"}/>
           </div>
           <div>

           </div>
       </section>
    )
}