import '@/style/components/principalSection.css'
import Link from 'next/link';
function PrincipalSection({type = 'primary', secondaryTitile, secondaryLink =null, title=null, sousTitle=null, description=null, link1=null, link2=null}) {
    if(type=== 'primary' &&  title && sousTitle && description && link1 && link2){
        return(
            <section className='principal-section'> 
                <div className='principal-section-content-p'>
                    <h4>{title}</h4>
                    <h2>{sousTitle}</h2>
                    <p>{description}</p>
                    <div>
                        <Link href={link1.href}>{link1.title}</Link>
                        <Link href={link2.href}>{link2.title}</Link>
                    </div>
                </div>
            </section>
        )
    }

    if(type === 'secondary'&& secondaryLink){
        return (
            <section className='principal-section secondary'> 
                <div className='principal-section-content-s'>
                    <div className='principal-section-content-s-head'>
                        <Link href={"/"} >Accueil </Link>  <span> |  {secondaryLink} </span>
                    </div>
                    <div className='principal-section-content-s-body'>
                        <h2>{secondaryTitile}</h2>
                    </div>
                </div>
            </section>
        )
    }
}

export default PrincipalSection;