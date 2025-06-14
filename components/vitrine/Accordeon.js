'use client'
import { useState } from 'react';
import '@/style/components/Accordion.css';

const AccordionItem = ({ id, title, description, isOpen, onClick }) => {
    return (
        <div className={`accordion-item ${isOpen ? "open" : ""}`}>
            <button className="accordion-header" onClick={() => onClick(id)}>
                {title}
                <span>{isOpen ? '-' : '+'}</span>
            </button>
            <div className="accordion-body">{description}</div>
        </div>
    );
};

export default function Accordion({ items }) {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    return (
        <div className="accordion">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    id={index}
                    title={item.title}
                    description={item.description}
                    isOpen={openIndex === index}
                    onClick={handleToggle}
                />
            ))}
        </div>
    );
}
