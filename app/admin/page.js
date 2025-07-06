"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "@/style/admin/login.module.css";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

export default function Page() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <section className={styles.section}>
            <div className={styles.imageContainer}>
                <Image
                    src="/login-bg.jpg"
                    alt="Fond page login"
                    layout="fill"
                    objectFit="cover"
                    className={styles.bgImage}
                />
            </div>

            <div className={styles.formContainer}>
                <div className={styles.formContent}>
                    <div className={styles.header}>
                        <h1>Bonjour admin</h1>
                        <h3>Bienvenue à vous</h3>
                    </div>

                    <form className={styles.form}>
                        <div className={styles.inputGroup}>
                            <FiMail className={styles.icon} />
                            <input type="email" placeholder="Email" required />
                        </div>

                        <div className={styles.inputGroup}>
                            <FiLock className={styles.icon} />
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Mot de passe"
                                required
                            />
                            <span
                                className={styles.eyeIcon}
                                onClick={() => setShowPassword(!showPassword)}
                            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </span>
                        </div>

                        <button type="submit" className={styles.button}>
                            Connexion
                        </button>

                        <a href="#" className={styles.forgotLink}>
                            Mot de passe oublié ?
                        </a>
                    </form>
                </div>
            </div>
        </section>
    );
}
