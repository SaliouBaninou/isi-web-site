import PrincipalSection from "@/components/vitrine/PrincipalSection";
import AccordeonMessage from "@/components/vitrine/AccordeonMessage";
import '@/style/OurMission.css'
export const metadata = {
    title: 'ISI | Notre Mission',
    description: '...',
}
export default function PageOurMission(){
    return (
        <>
            <PrincipalSection
                type="secondary"
                secondaryTitile="Notre Mission"
                secondaryLink="Institut | Notre mission"
            />
            <section className="our-mission-section">
                <div className="our-mission-content">
                    <div className="our-mission-content-video">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/zCJtdZ7YiJU?si=jMEkwJD-r1QXDACi"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <AccordeonMessage type='secondary' title={"Notre mission"} message={"Notre mission consiste à former des hommes et des femmes aux carrières d’ingénieurs dans de nombreux secteurs d’activité avec des métiers variés. En plus des compétences scientifiques et techniques acquises dans chaque spécialité, l’accent est mis sur le renforcement des outils de communication et du leadership chez les futurs ingénieurs.La recherche scientifique occupe une place privilégiée dans cette mission et toutes ses structures contribuent à former les élèves ingénieurs et les mastériens par la recherche et s’impliquent également à former à la recherche de nouveaux acteurs capables d’innover dans ce domaine"}/>
                </div>
            </section>
        </>
    )
}