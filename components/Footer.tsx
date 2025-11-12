
import React from 'react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-gray-500 dark:text-gray-400">
        <div className="flex justify-center items-center gap-4 mb-4">
             <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors"><GithubIcon /></a>
             <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors"><LinkedinIcon /></a>
             <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors"><TwitterIcon /></a>
        </div>
        <p>&copy; {currentYear} Manish R Shetty. All Rights Reserved.</p>
        <p className="mt-1">Made with ❤️ using React & Tailwind CSS.</p>
      </div>
    </footer>
  );
};
