'use client';

import { FaAngleRight } from "react-icons/fa6";
import '@/style/components/accordeonMessage.css'
import { useState } from "react";
function AccordeonMessage({title, message, type=''}) {
    const [isActive, setActive] = useState(false)
    const handleClick = () => {
        setActive(!isActive)
    }
    return (
        <div className={`accordeon-message ${type === 'secondary' ? 'secondary' :''}`}>
            <hr/>
            <h2>{title}</h2>
            <p className={isActive ? 'active' : ''}>{message}</p>
            <button onClick={handleClick} type="button">{isActive ? 'Voir moins' : 'Voir plus'}<FaAngleRight/></button>
        </div>
    );
}

export default AccordeonMessage;