import NavHeader from "@/components/vitrine/Header";

export default function VitrineLayout({children}){
    return (
        <>
            <NavHeader/>
            {children}
        </>
    )
}