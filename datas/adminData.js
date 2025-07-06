import { BiGridAlt } from "react-icons/bi";
import { FaSchool, FaUserPlus, FaEnvelope, FaNewspaper } from "react-icons/fa";

export const adminData = {
    navLinks: [
        {
            title: "Dashboard",
            href: "/admin/dashboard",
            icon: <BiGridAlt />
        },
        {
            title: "Établissement",
            href: "/admin/etablissement",
            icon: <FaSchool />
        },
        {
            title: "Inscriptions",
            href: "/admin/inscriptions",
            icon: <FaUserPlus />
        },
        {
            title: "Contact",
            href: "/admin/contact",
            icon: <FaEnvelope />
        },
        {
            title: "Actualités",
            href: "/admin/actualites",
            icon: <FaNewspaper />
        }
    ]
};
