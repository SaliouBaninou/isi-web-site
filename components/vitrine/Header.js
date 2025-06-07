import Image from "next/image";

function NavHeader() {
    return (
        <header>
            <div className="header-logo">
                {/* <Image width={200} height={120} src="/isi_logo.png" alt="Logo isi"/> */}
            </div>
            <nav>
                <ul className="header-links">
                    
                </ul>
            </nav>
        </header>
    );
}

export default NavHeader;