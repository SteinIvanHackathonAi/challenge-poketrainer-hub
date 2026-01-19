import React from 'react';
import { cn } from '@/utils';

const Header = () => {
  return (
    <header className={cn('bg-blue-500', 'text-white', 'p-4')}>
      <div className="container mx-auto">
        <h1 className="text-lg font-bold">PokéTrainer Hub</h1>
        <nav className="mt-2">
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#pokedex" className="hover:underline">Pokédex</a></li>
            <li><a href="#trainers" className="hover:underline">Trainers</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
