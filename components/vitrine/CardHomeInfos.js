import Image from "next/image";
import '@/style/components/cardHome.css'

function CardHomeInfos({title="", image="", description=""}) {
    return (
        <div className="card-home-infos">
            <div className="card-home-image">
                <Image src={image} width={230} height={120} alt={`Image ${title}`}/>
            </div>
            <div className="card-home-text">
                <h3>
                    {title}
                </h3>
                <hr/>
                <p>
                    {description}
                </p>
            </div>
        </div>
    );
}

export default CardHomeInfos;