import NavHeader from "@/components/vitrine/Header";
import Link from "next/link";
import '@/style/home.css'

export const metadata = {
  title: 'ISI | Accueil',
  description: '...',
}


export default function HomePage(){
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
    </>
  )
}