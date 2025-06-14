import PrincipalSection from "@/components/vitrine/PrincipalSection";
import '@/style/PourquoiISI.css'
import Image from "next/image";
import Accordion from "@/components/vitrine/Accordeon";
export const metadata = {
    title: 'ISI | Pourquoi ISI ?',
    description: '...',
}

const accordionData = [
    {
        title: "Notre mission",
        description: "Former des hommes et des femmes aux carrières d’ingénieurs dans de nombreux secteurs d’activité..."
    },
    {
        title: "Nos valeurs",
        description: "Innovation, excellence, rigueur, esprit d'équipe et éthique."
    },
    {
        title: "Nos engagements",
        description: "Accompagner nos étudiants dans leur réussite scolaire et professionnelle."
    }
];


export default function PagePourquoiISI(){
    return (
        <>
            <PrincipalSection
                type="secondary"
                secondaryTitile="Pourquoi ISI ?"
                secondaryLink="Institut | Pourquoi ISI"
            />
            <section className="pourquoi-isi-section">
                <div className="pourquoi-isi-content">
                    <div className='left'>
                        <Image src={'/infos_bulle.png'} width={87} height={84} alt={'Icon infos'}/>
                        <h2>Pourquoi étudier à ISI ?</h2>
                    </div>
                    <div className='accordions-pourquoi'>
                        <Accordion items={accordionData} />
                    </div>
                </div>
            </section>
        </>
    )
}