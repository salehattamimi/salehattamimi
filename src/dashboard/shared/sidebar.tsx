import { HomeIcon, LayoutDashboardIcon, LogOutIcon, MenuIcon, SettingsIcon, UserIcon, XIcon } from "lucide-react"
import { useState } from "react";

const Sidebar = () => {

    const [active, setActive] = useState("Dashboard");
    const [open, setOpen] = useState(false);

    const navItems = [
        { icon: HomeIcon, label: "Dashboard", href: "#" },
        { icon: UserIcon, label: "Profile", href: "#" },
        { icon: SettingsIcon, label: "Settings", href: "#" },
    ];
    return (
        <>
            {/* Mobile toggle button */}
            <button
                className="fixed top-4 left-4 z-50 p-2 rounded-md bg-[#1a1a1a] text-[#e5e5e5] md:hidden"
                onClick={() => setOpen(!open)}
            >
                {open ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>

            {/* Overlay (mobile) */}
            {open && (
                <div
                    className="fixed inset-0 z-30 bg-black/50 md:hidden"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* Sidebar */}
            <nav
                className={`
          fixed top-0 left-0 z-40 h-screen w-60 bg-[#1a1a1a] text-[#a3a3a3] p-3 font-sans flex flex-col gap-0.5
          transition-transform duration-200
          md:static md:translate-x-0
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
            >
                {/* Header non mobile */}
                <div className="flex items-center gap-2 px-3 py-2.5 mb-4 border-b border-[#333]">
                    <LayoutDashboardIcon className="w-5 h-5 text-[#e5e5e5]" />
                    <h1 className="text-[13px] font-medium text-[#e5e5e5]">MY DASHBOARD</h1>
                </div>

                <p className="text-[11px] tracking-widest text-[#525252] px-3 mb-1">MENU</p>

                <div className="flex flex-col gap-0.5">
                    {navItems.map(({ icon: Icon, label, href }) => {
                        const isActive = active === label;
                        return (
                            <a
                                key={label}
                                href={href}
                                onClick={() => { setActive(label); setOpen(false); }}
                                className={`
                  flex items-center gap-2.5 px-3 py-2 rounded-md text-[13.5px] transition-colors duration-100
                  ${isActive
                                        ? "bg-[#262626] text-white"
                                        : "hover:bg-[#262626] hover:text-[#e5e5e5]"
                                    }
                `}
                            >
                                <Icon className={`w-4 h-4 ${isActive ? "text-[#10b981]" : ""}`} />
                                {label}
                            </a>
                        );
                    })}
                </div>


                <a
                    href="#"
                    className="flex items-center gap-2.5 px-3 py-2 rounded-md text-[13.5px] hover:bg-[#262626] hover:text-[#e5e5e5] transition-colors duration-100 mt-auto"
                >
                    <LogOutIcon className="w-4 h-4" />
                    Logout
                </a >
            </nav >
        </>
    );
}

export default Sidebar