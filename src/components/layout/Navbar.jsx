import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronRight, Menu, X, Sun, Moon, ArrowRight } from "lucide-react";
import { MEGA_COMPANY, MEGA_SOLUTIONS, MEGA_ACADEMY } from "../../data/site";

const QuinteraMegaDropdown = ({ label, to, menuData, testId }) => {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const dropdownRef = useRef(null);

    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const isActive = location.pathname.startsWith(to);

    return (
        <div
            ref={dropdownRef}
            className="static"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <button
                type="button"
                data-testid={testId}
                onClick={() => setOpen((v) => !v)}
                className={`relative flex items-center gap-1.5 rounded-full px-4 py-2 text-base font-semibold transition-colors ${
                    isActive || open
                        ? "text-brand dark:text-[#1a3a5c] font-bold after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-brand dark:after:bg-[#1a3a5c] after:rounded-full"
                        : "text-slate-700 hover:text-brand dark:text-[#1a3a5c] dark:hover:text-[#0d1f33]"
                }`}
                aria-expanded={open}
            >
                {label}
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="quintera-megamenu-panel"
                    >
                        {menuData.columns.map((col) => (
                            <div key={col.title} className="quintera-megamenu-col">
                                <h4>
                                    {col.title}
                                    {col.badge && (
                                        <span className="quintera-badge-specialist">{col.badge}</span>
                                    )}
                                </h4>

<<<<<<< HEAD
                                <Link
                                    to={col.to || col.links?.[0]?.to || "#"}
                                    onClick={() => setOpen(false)}
                                    className="quintera-megamenu-img block cursor-pointer"
                                    aria-label={col.title}
                                >
                                    <img src={col.image} alt={col.title} loading="lazy" />
                                </Link>
=======
                                <div className="quintera-megamenu-img">
                                    <img src={col.image} alt={col.title} loading="lazy" />
                                </div>
>>>>>>> 3ae9bc15a1dc980270aef1b1fab94c3cbf8f9929

                                <ul>
                                    {col.links.map((link) => (
                                        <li key={link.to}>
                                            <Link to={link.to} onClick={() => setOpen(false)}>
                                                <ChevronRight className="quintera-chevron-icon" />
                                                <span>{link.label}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        {/* Callout Column 4 */}
                        <div className="quintera-megamenu-callout">
                            <h3>{menuData.callout.title}</h3>
                            <p>{menuData.callout.desc}</p>
                            <Link
                                to={menuData.callout.to}
                                onClick={() => setOpen(false)}
                                className="quintera-megamenu-btn"
                            >
                                {menuData.callout.ctaLabel}
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const MobileMegaSection = ({ label, to, menuData, onNavigate }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b border-slate-100 dark:border-slate-800">
            <button
                data-testid={`mobile-nav-${label.toLowerCase()}`}
                onClick={() => setOpen((v) => !v)}
                className="flex w-full items-center justify-between px-2 py-4 font-display text-base font-bold dark:text-white"
            >
                {label}
                <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""} dark:text-slate-400`} />
            </button>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="space-y-3 pb-4">
                           
                            {menuData.columns.map((col) => (
                                <div key={col.title} className="quintera-mobile-col">
                                    <div className="flex items-center gap-3">
<<<<<<< HEAD
                                        <Link
                                            to={col.to || col.links?.[0]?.to || "#"}
                                            onClick={onNavigate}
                                            className="shrink-0"
                                            aria-label={col.title}
                                        >
                                            <img
                                                src={col.image}
                                                alt={col.title}
                                                className="h-12 w-16 shrink-0 rounded object-cover cursor-pointer hover:opacity-90 transition-opacity"
                                            />
                                        </Link>
=======
                                        <img
                                            src={col.image}
                                            alt={col.title}
                                            className="h-12 w-16 shrink-0 rounded object-cover"
                                        />
>>>>>>> 3ae9bc15a1dc980270aef1b1fab94c3cbf8f9929
                                        <div className="flex items-center gap-1.5">
                                            <span className="text-xs font-bold text-slate-900 dark:text-white">
                                                {col.title}
                                            </span>
                                            {col.badge && (
                                                <span className="quintera-badge-specialist">
                                                    {col.badge}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <ul className="mt-2.5 space-y-2 border-t border-slate-200/60 pt-2 dark:border-slate-800/60">
                                        {col.links.map((link) => (
                                            <li key={link.to}>
                                                <Link
                                                    to={link.to}
                                                    onClick={onNavigate}
                                                    className="flex items-center text-xs font-medium text-slate-600 hover:text-brand dark:text-slate-300 dark:hover:text-blue-400"
                                                >
                                                    <ChevronRight className="mr-1 h-3 w-3 text-slate-400 dark:text-slate-500" />
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Navbar = ({ theme, onToggleTheme }) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setMobileOpen(false);
    }, [location.pathname]);

    const linkCls = ({ isActive }) =>
        `relative rounded-full px-4 py-2 text-base font-semibold transition-colors ${
            isActive
                ? "text-brand dark:text-[#1a3a5c] font-bold after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-brand dark:after:bg-[#1a3a5c] after:rounded-full"
                : "text-slate-700 hover:text-brand dark:text-[#1a3a5c] dark:hover:text-[#0d1f33]"
        }`;

    return (
        <header
            className="fixed inset-x-0 top-0 z-50 shadow-sm"
            data-testid="main-navbar"
            style={{
                background:
                    theme === "dark"
                        ? "linear-gradient(135deg, #8b8f92, #9bdbeb)"
                        : "#ffffff",
            }}
        >
            {/* Reduced side padding: px-3 sm:px-4 → tighter left/right edges */}
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-1 sm:h-[72px] sm:px-1 lg:px-3">
                {/* LEFT – Logo */}
                <Link
                    to="/"
                    data-testid="nav-logo"
                    className="flex shrink-0 items-center gap-2.5"
                >
                    <img
                        src="/images/gklogo.png"
                        alt="GK Nexergy Logo"
                        className="navbar-logo"
                    />
                </Link>

                {/* CENTER – Desktop nav links */}
                <nav
                    className="hidden flex-1 items-center justify-center lg:flex"
                    aria-label="Primary"
                >
                    <NavLink to="/home" data-testid="nav-home" className={linkCls}>
                        Home
                    </NavLink>
                    <QuinteraMegaDropdown
                        label="Company"
                        to="/about"
                        menuData={MEGA_COMPANY}
                        testId="nav-company-dropdown"
                    />
                    <QuinteraMegaDropdown
                        label="Solutions"
                        to="/solutions"
                        menuData={MEGA_SOLUTIONS}
                        testId="nav-solutions-dropdown"
                    />
                    <QuinteraMegaDropdown
                        label="Academy"
                        to="/academy"
                        menuData={MEGA_ACADEMY}
                        testId="nav-academy-dropdown"
                    />
                    <NavLink
                        to="/projects"
                        data-testid="nav-projects"
                        className={linkCls}
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/careers"
                        data-testid="nav-hiring"
                        className={linkCls}
                    >
                        Hiring
                    </NavLink>
                    <NavLink
                        to="/contact"
                        data-testid="nav-contact"
                        className={linkCls}
                    >
                        Contact
                    </NavLink>
                </nav>

                {/* RIGHT – Theme toggle + CTA + mobile menu */}
                <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                    <button
                        data-testid="theme-toggle"
                        onClick={onToggleTheme}
                        aria-label="Toggle light and dark theme"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-brand hover:text-brand dark:border-[#1a3a5c] dark:text-[#1a3a5c] dark:hover:border-[#0d1f33] dark:hover:text-[#0d1f33]"
                    >
                        {theme === "dark" ? (
                            <Sun className="h-4 w-4" />
                        ) : (
                            <Moon className="h-4 w-4" />
                        )}
                    </button>

                    <a
                        href="https://forms.gle/GCqvWiWqxwvDSzoZ6"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="nav-cta"
                        className="group hidden items-center gap-2 rounded-full bg-brand px-5 py-2.5 font-display text-sm font-bold text-white transition-colors duration-300 hover:bg-electric hover:text-ink dark:bg-[#1a3a5c] dark:hover:bg-[#0d1f33] sm:inline-flex"
                    >
                        Start a Conversation
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>

                    <button
                        data-testid="mobile-menu-toggle"
                        onClick={() => setMobileOpen((v) => !v)}
                        aria-label="Open menu"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-700 dark:border-[#1a3a5c] dark:text-[#1a3a5c] lg:hidden"
                    >
                        {mobileOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="max-h-[calc(100vh-64px)] overflow-y-auto border-t border-slate-100 px-6 py-4 dark:border-[#1a3a5c]/20 lg:hidden shadow-lg"
                        style={{
                            background:
                                theme === "dark"
                                    ? "linear-gradient(135deg, #8b8f92, #9bdbeb)"
                                    : "#ffffff",
                        }}
                        data-testid="mobile-menu"
                    >
                        <Link
                            to="/home"
                            data-testid="mobile-nav-home"
                            className="border-b border-slate-100 px-2 py-4 font-display text-base font-bold dark:border-[#1a3a5c]/20 dark:text-[#1a3a5c]"
                            onClick={() => setMobileOpen(false)}
                        >
                            Home
                        </Link>
                        <MobileMegaSection
                            label="Company"
                            to="/about"
                            menuData={MEGA_COMPANY}
                            onNavigate={() => setMobileOpen(false)}
                        />
                        <MobileMegaSection
                            label="Solutions"
                            to="/solutions"
                            menuData={MEGA_SOLUTIONS}
                            onNavigate={() => setMobileOpen(false)}
                        />
                        <MobileMegaSection
                            label="Academy"
                            to="/academy"
                            menuData={MEGA_ACADEMY}
                            onNavigate={() => setMobileOpen(false)}
                        />
                        <div className="flex flex-col py-3">
                            {[
                                { label: "Projects", to: "/projects" },
                                { label: "Hiring", to: "/careers" },
                                { label: "Contact", to: "/contact" },
                            ].map((l) => (
                                <Link
                                    key={l.to}
                                    to={l.to}
                                    data-testid={`mobile-nav-${l.label.toLowerCase()}`}
                                    className="border-b border-slate-100 px-2 py-4 font-display text-base font-bold dark:border-[#1a3a5c]/20 dark:text-[#1a3a5c]"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {l.label}
                                </Link>
                            ))}
                        </div>
                        <a
                            href="https://forms.gle/GCqvWiWqxwvDSzoZ6"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="mobile-nav-cta"
                            className="mb-4 mt-2 flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 font-display text-sm font-bold text-white dark:bg-[#1a3a5c]"
                        >
                            Start a Conversation <ArrowRight className="h-4 w-4" />
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;