import PrincipalSection from "@/components/vitrine/PrincipalSection";

export default function PageInscription(){
    return (
        <>
            <PrincipalSection
                title="Institut Supérieur d'Ingénierie"
                sousTitle={"Inscription en ligne"}
                description={"Inscrivez vous et/ou obtenez votre pré-inscription facilement à ISI. Cliquez sur demande"}
                link1={{href:'/pre-inscription', title: "Demande"}}
                link2={{href:'/working', title: "Je suis travailleur"}}
            />
        </>
    )
}