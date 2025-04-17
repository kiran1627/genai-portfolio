import React from 'react';
import './styles/main.css'
export default function Header() {
    return (
        <header className="flex justify-between items-center p-6 bg-gray-800 shadow-md">
            <h1 className="text-xl font-bold">GenAI Portfolio</h1>
            <nav className="space-x-4">
                <a href="#about" className="hover:text-blue-400">About</a>
                <a href="#projects" className="hover:text-blue-400">Projects</a>
                <a href="#contact" className="hover:text-blue-400">Contact</a>
            </nav>
        </header>
    );
}
