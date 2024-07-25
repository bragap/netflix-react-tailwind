// hooks from react
import React, { useState } from 'react';

//react router dom
import { NavLink } from 'react-router-dom';

//local interface
interface NavbarProps {
    setIsLoading: (isLoading: boolean) => void;
}

const NavbarResponsive: React.FC<NavbarProps> = ({ setIsLoading }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-gradient-to-b from-black/70 to-transparent text-slate-200 px-6 fixed w-full text-sm lg:flex lg:justify-between lg:items-center lg:px-10 lg:py-3">
            <div className="flex items-center justify-between px-4 py-4 lg:p-0 lg:flex-grow">
                <div className="flex items-center">
                    <NavLink to="/" className="link-two" onClick={() => setIsLoading(true)}>
                        <img src="./Vector.png" alt="Netflix Logo" />
                    </NavLink>
                    <nav className="hidden lg:flex lg:ml-10">
                        <ul className="flex gap-7">
                            <NavLink
                                to="/"
                                onClick={() => setIsLoading(true)}
                                className={({ isActive }) => (isActive ? "link font-bold" : "link")}
                            >
                                Início
                            </NavLink>
                            <NavLink
                                to="/series"
                                onClick={() => setIsLoading(true)}
                                className={({ isActive }) => (isActive ? "link font-bold" : "link")}
                            >
                                Séries
                            </NavLink>
                            <NavLink
                                to="/upcoming"
                                onClick={() => setIsLoading(true)}
                                className={({ isActive }) => (isActive ? "link font-bold" : "link")}
                            >
                                Estréias
                            </NavLink>
                            <NavLink
                                to="/top-movies"
                                onClick={() => setIsLoading(true)}
                                className={({ isActive }) => (isActive ? "link font-bold" : "link")}
                            >
                                Filmes Mais Avaliados
                            </NavLink>
                        </ul>
                    </nav>
                </div>
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
                    >
                        <svg className="h-6 w-6 fill-current text-white" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path
                                    fillRule="evenodd"
                                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                                />
                            ) : (
                                <path
                                    fillRule="evenodd"
                                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>
            <nav className={`${isOpen ? 'block' : 'hidden'} px-4 pt-2 pb-6 transition duration-100 lg:hidden`}>
                <ul className="text-sm flex flex-row gap-7 lg:text-base">
                    <NavLink
                        to="/"
                        onClick={() => setIsLoading(true)}
                        className={({ isActive }) => (isActive ? "link font-bold" : "link")}
                    >
                        Início
                    </NavLink>
                    <NavLink
                        to="/series"
                        onClick={() => setIsLoading(true)}
                        className={({ isActive }) => (isActive ? "link font-bold" : "link")}
                    >
                        Séries
                    </NavLink>
                    <NavLink
                        to="/upcoming"
                        onClick={() => setIsLoading(true)}
                        className={({ isActive }) => (isActive ? "link font-bold" : "link")}
                    >
                        Estréias
                    </NavLink>
                    <NavLink
                        to="/top-movies"
                        onClick={() => setIsLoading(true)}
                        className={({ isActive }) => (isActive ? "link font-bold" : "link")}
                    >
                        Filmes Mais Avaliados
                    </NavLink>
                </ul>
            </nav>
            <div className="hidden lg:flex items-center gap-2 max-h-5">
                <NavLink to="/">
                    <img src="./Search.png" alt="Search" className="link-two w-6" />
                </NavLink>

                <NavLink to="/">
                    <img src="./Bell.png" alt="Notifications" className="link-two w-6" />
                </NavLink>
                <NavLink to="/">
                    <img src="./Avatar.png" alt="Profile" className="link-two w-7 rounded-sm" />
                </NavLink>
                <NavLink to="/">
                    <img src="./Arrow.png" alt="Menu" className="link-two" />
                </NavLink>
            </div>
        </header>
    );
};

export default NavbarResponsive;
