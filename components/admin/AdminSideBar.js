'use client';

import styles from '@/style/admin/components/side-bar.module.css';
import {FaSignOutAlt } from 'react-icons/fa';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import {adminData} from "@/datas/adminData";

export default function AdminSideBar() {
    const pathname = usePathname();

    return (
        <aside className={styles.sidebar}>
            {/* Top: Logo */}
            <div className={styles.logo}>
                <Image src={'/isi_logo.png'} height={80} width={100} alt={'Logo'} />
            </div>

            {/* Admin Info */}
            <div className={styles.adminInfo}>
                <Image src="/admin.jpeg" width={200} height={200} alt="Admin" className={styles.avatar} />
                <div className={styles.infos}>
                    <h3 className={styles.name}>SALIOU Baninou</h3>
                    <p className={styles.status}>Administrateur</p>
                </div>
            </div>

            {/* Middle: Links */}
            <nav className={styles.nav}>
                {
                    adminData.navLinks.map((link, index) => (
                        <Link
                            key={`admin-link-${index}`}
                            href={link.href}
                            className={clsx(styles.navItem, {
                                [styles.active]: pathname === link.href || pathname.startsWith(`${link.href}/`),
                            })}
                        >
                            {link.icon}
                            {link.title}
                        </Link>
                    ))
                }
            </nav>

            {/* Bottom: Logout */}
            <div className={styles.logout}>
                <button className={styles.navItem}>
                    <FaSignOutAlt className={styles.icon} />
                    Déconnexion
                </button>
            </div>
        </aside>
    );
}
