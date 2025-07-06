import PrincipalSection from "@/components/vitrine/PrincipalSection";
import ShowFormation from "@/components/vitrine/ShowFormation";

const formations = [
    {
        title: "Développement Web Front-End",
        description: "Apprenez les bases du HTML, CSS et JavaScript pour créer des interfaces modernes et interactives.",
        image: "/formation_1.jpg",
        id: 1
    },
    {
        title: "JavaScript Avancé",
        description: "Approfondissez vos connaissances avec les closures, le DOM, les promesses et les fonctions asynchrones.",
        image: "/formation_1.jpg",
        id: 2
    },
    {
        title: "React.js de A à Z",
        description: "Maîtrisez React pour construire des applications web dynamiques avec des composants réactifs.",
        image: "/formation_1.jpg",
        id: 3
    },
    {
        title: "Node.js et Express",
        description: "Créez des serveurs web et des API RESTful avec Node.js et le framework Express.",
        image: "/formation_1.jpg",
        id: 4
    },
    {
        title: "Intégration HTML & CSS",
        description: "Apprenez à convertir une maquette Figma en site web responsive et accessible.",
        image: "/formation_1.jpg",
        id: 5
    },
    {
        title: "Typescript pour les Développeurs JS",
        description: "Passez au niveau supérieur avec TypeScript, le sur-ensemble typé de JavaScript.",
        image: "/formation_1.jpg",
        id: 6
    },
    {
        title: "Git et GitHub",
        description: "Maîtrisez le versioning de vos projets avec Git et collaborez efficacement sur GitHub.",
        image: "/formation_1.jpg",
        id: 7
    },
    {
        title: "Développement Full-Stack MERN",
        description: "Créez une application complète avec MongoDB, Express, React et Node.js.",
        image: "/formation_1.jpg",
        id: 8
    },
    {
        title: "API REST et GraphQL",
        description: "Comprenez les concepts des API modernes, créez des endpoints REST et explorez GraphQL.",
        image: "/formation_1.jpg",
        id: 9
    },
    {
        title: "Déploiement Web avec Vercel et Netlify",
        description: "Apprenez à héberger vos projets front-end et back-end facilement en ligne.",
        image: "/formation_1.jpg",
        id: 10
    }
];


export default function PageFormationScientifique(){
    return (
        <>
            <PrincipalSection
                type="secondary"
                secondaryTitile="Formationn Scientifique"
                secondaryLink="Institut | Formation Scientifique"
            />
            <ShowFormation formations={formations}/>
        </>
    )
}