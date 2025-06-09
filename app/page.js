import NavHeader from "@/components/vitrine/Header";
import Link from "next/link";
import '@/style/home.css'
import CardHomeInfos from "@/components/vitrine/CardHomeInfos";
import HomeCaroussel from "@/components/vitrine/HomeCaroussel";

export const metadata = {
  title: 'ISI | Accueil',
  description: '...',
}


export default function HomePage(){
  const carouselData =[
    {
      title: "Remise de diplome",
      description: "Remise de diplome à l'institut supérieur d'ingénierie",
      id: 1,
      image: '/diplome_image.jpg',
      note: 4.5
    },
    {
      title: "Update site ISI",
      description: "La 2eme d’informatique d’ISI ferrons le site de l'école ",
      id: 2,
      image: '/iformatique_image.jpg',
      note: 4.5
    },
    {
      title: "Remise de diplome",
      description: "Remise de diplome à l'institut supérieur d'ingénierie",
      id: 3,
      image: '/diplome_image.jpg',
      note: 4.5
    },
    {
      title: "Update site ISI",
      description: "La 2eme d’informatique d’ISI ferrons le site de l'école ",
      id: 4,
      image: '/iformatique_image.jpg',
      note: 4.5
    },
    {
      title: "Remise de diplome",
      description: "Remise de diplome à l'institut supérieur d'ingénierie",
      id: 5,
      image: '/diplome_image.jpg',
      note: 4.5
    },
    {
      title: "Update site ISI",
      description: "La 2eme d’informatique d’ISI ferrons le site de l'école ",
      id: 6,
      image: '/iformatique_image.jpg',
      note: 4.5
    }
  ]
  return (
    <>
      <NavHeader/>
      <section className="home-our-mission-section">
          <div className="text_content">
            <hr/>
            <h2>Notre Mission</h2>
            <p>
              Notre mission consiste à former des femmes et des hommes aux carrières d’ingénieurs dans de nombreux secteurs d’activité avec des métiers variés.
            </p>
            <Link href={'/our-mission'}>Voir plus</Link>
          </div>
          <div className="video_content">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/r-HH361nMsg?si=pr6pxv-Vb9_YhhTF" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
      </section>
      <section className="home-information-section">
        <div className="infos-text_content">
          <h5>Institut Supérieur d{"'"}Ingénierie</h5>
          <h2>ISI l{"'"}Institut de la compétence !</h2>
          <p>
            Notre Institut accueille des étudiants boursier de tout horizon en leur permettant de donner une trajectoire certaine à leurs formations et à leurs carrières
          </p>
        </div>
        <div className="infos-cards-infos">
          <CardHomeInfos title="Présentation" description="ISI vous présente son établissement" image="/card_etudiant_etranger.jpg"/>
          <CardHomeInfos title="Formation" description="ISI vous présente ses formations" image="/card_etudiant_etranger.jpg"/>
          <CardHomeInfos title="Diplome" description="Diplome de l'institut de la compétence" image="/card_etudiant_etranger.jpg"/>
          <CardHomeInfos title="Etudiant étranger" description="ISI accueil aussi les étudiants étrangers" image="/card_presentation.jpg"/>
        </div>
      </section>
      <section className="home-actuality">
        <div className="infos-text_content">
          <h5>Dernière actualités</h5>
          <h2>ISI l{"'"}Institut de la compétence !</h2>
          <p>
            Consultez les différentes dernière actualités.
            L’institut de la compétente vous présent
          </p>
        </div>
        <HomeCaroussel data={carouselData}/>
      </section>
    </>
  )
}