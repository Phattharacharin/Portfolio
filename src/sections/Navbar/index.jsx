const navItems = [
    { name: "About", href: "#about" },
    { name: "Project", href: "#project" },
    { name: "Certificate", href: "#certificate" },
];

const Navbar = () => {
    return (
        /* ลด gap-4 เหลือ gap-2.5 เพื่อให้เมนูชิดกันมากขึ้น */
        <nav className="flex flex-col gap-5 mt-5">
            {navItems.map((item) => (
                <a
                    key={item.name}
                    href={item.href}
                    className="group flex items-center w-fit py-0.7"
                >

                    {/* ปรับเส้นเริ่มต้นให้สั้นลงเหลือ w-4 (16px) และยืดตอน hover แค่ w-8 (32px) */}
                    <span className="mr-3 h-[6px] w-1
            
                 bg-slate-600 transition-all duration-300 group-hover:w-8 group-hover:bg-white"></span>

                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 transition-colors duration-300 group-hover:text-sky-400">
                        {item.name}
                    </span>
                </a>
            ))}
        </nav>
    );
};

export default Navbar;