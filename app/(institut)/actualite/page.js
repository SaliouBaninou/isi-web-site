import PrincipalSection from "@/components/vitrine/PrincipalSection";
import ShowActualities from "@/components/vitrine/ShowActualities";

const actualities = [
    {
        id: 1,
        title: 'Visite du fondateur de ISI',
        description: 'Visite du fondateur de ISI',
        image: '/formation_1.jpg',
        created_at: '2021-08-20'
    },
    {
        id: 2,
        title: 'Conférence sur l’intelligence artificielle',
        description: 'Conférence sur l’intelligence artificielle',
        image: '/formation_1.jpg',
        created_at: '2021-09-10'
    },
    {
        id: 3,
        title: 'Cérémonie de remise des diplômes',
        description: 'Cérémonie de remise des diplômes',
        image: '/formation_1.jpg',
        created_at: '2021-09-25'
    },
    {
        id: 4,
        title: 'Atelier de développement web',
        description: 'Atelier de développement web',
        image: '/formation_1.jpg',
        created_at: '2021-10-05'
    },
    {
        id: 5,
        title: 'Lancement de la semaine culturelle',
        description: 'Lancement de la semaine culturelle',
        image: '/formation_1.jpg',
        created_at: '2021-10-15'
    },
    {
        id: 6,
        title: 'Séminaire sur la cybersécurité',
        description: 'Séminaire sur la cybersécurité',
        image: '/formation_1.jpg',
        created_at: '2021-11-01'
    },
    {
        id: 7,
        title: 'Journée portes ouvertes',
        description: 'Journée portes ouvertes',
        image: '/formation_1.jpg',
        created_at: '2021-11-18'
    },
    {
        id: 8,
        title: 'Participation au hackathon national',
        description: 'Participation au hackathon national',
        image: '/formation_1.jpg',
        created_at: '2021-12-02'
    },
    {
        id: 9,
        title: 'Forum des anciens étudiants',
        description: 'Forum des anciens étudiants',
        image: '/formation_1.jpg',
        created_at: '2021-12-15'
    },
    {
        id: 10,
        title: 'Présentation des projets de fin d’études',
        description: 'Présentation des projets de fin d’études',
        image: '/formation_1.jpg',
        created_at: '2022-01-05'
    },
    {
        id: 11,
        title: 'Rencontre avec les entreprises partenaires',
        description: 'Rencontre avec les entreprises partenaires',
        image: '/formation_1.jpg',
        created_at: '2022-01-20'
    }
]


export default function PageActualte(){
    return (
        <>
            <PrincipalSection
            type="secondary"
                secondaryTitile="Actualité"
                secondaryLink="Actualité"
            />
            <ShowActualities actualities={actualities}/>
        </>
    )
}