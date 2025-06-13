import PrincipalSection from "@/components/vitrine/PrincipalSection";
import Image from "next/image";
import '@/style/motDuDirecteur.css';

export default function PageMotDuDirecteur(){
    return (
        <>
            <PrincipalSection
                type="secondary"
                secondaryTitile="Mot du directeur"
                secondaryLink="Institut | Mot du directeur"
            />
            <section className="mot-du-directeur-section">
                <div className="mot-du-directeur-content">
                    <p>Cher (e)s étudiant (e)s </p>
                    <p>
                        Toute admission à notre université constitue pour nous un engagement moral et, dans le respect de cette éthique, un gage de réussite. Nos étudiants s&#39;engagent avec nous dans une réciprocité positive.
                        Nous sommes très heureux de vous accueillir à l&#39;institut supérieur d&#39;ingénierie (isi), une institution d&#39;avant-garde aux normes des standards internationaux les plus rigoureux en matière d&#39;enseignement supérieur.
                    </p>
                    <p>
                        La mission de l&#39;institut supérieur d&#39;ingénierie (isi) est de former les futurs professionnels les plus performants. Dans cette optique, nous offrons à nos étudiants des cursus de formation à la fois adaptés aux exigences socioéconomiques du Gabon et orientés vers le développement des aptitudes personnelles et professionnelles de l&#39;étudiant, ce dernier étant au cœur de la méthode d&#39;enseignement. Conçue dans le respect de l&#39;éthique, de la culture et des valeurs gabonaises, notre université est construite autour de 3 axes fondateurs que sont l&#39;ouverture à l&#39;international, l&#39;engagement pour la réussite professionnelle, et un enseignement mettant l&#39;étudiant au centre de l&#39;approche pédagogique.
                    </p>
                    <p>
                        Parce que toute admission à notre université constitue pour nous un engagement moral et, dans le respect de cette éthique, un gage de réussite, nous veillons en permanence au juste équilibre entre enseignement théorique et pratique. C&#39;est la clé d&#39;une insertion professionnelle réussie pour nos étudiants. Ils sont placés dès le début de leur cursus dans les conditions réelles de la vie professionnelle grâce à un accompagnement personnalisé, des infrastructures et des laboratoires aux dernières normes des technologies professionnelles. Parce que l&#39;ouverture à l&#39;international est incontournable dans un contexte professionnel globalisé, nos étudiants ont la possibilité d&#39;effectuer une partie de leur cursus. Les stages à l&#39;étranger et l&#39;apprentissage des langues font également partie intégrante de cette démarche.
                    </p>
                    <p>
                        Enfin, l&#39;institut supérieur d&#39;ingénierie (isi) garantit une qualité académique aux normes des meilleurs labels du réseau des écoles supérieures. Elle bénéficie en permanence des programmes et des dernières innovations pédagogiques du réseau, dispensés par un corps professoral sélectionné parmi les meilleurs candidats nationaux et internationaux, et ceci dans une école d&#39;exception totalement connectée et aux standards internationaux.
                    </p>
                    <p>M. Yannick Amiar</p>
                </div>
                <div className="mot-du-directeur-image-content">
                    <div className="mot-du-directeur-image">
                        <Image width={400} height={350} src="/mot-du-directeur.jpeg" alt="Image mot du directeur"/>
                    </div>
                    <h3>M. Yannick Amiar</h3>
                </div>
            </section>
        </>
    );
}
