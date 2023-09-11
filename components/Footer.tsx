import React from 'react';
import { Button } from "@nextui-org/react";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-6 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <div className="flex flex-col sm:flex-row items-center mb-6 sm:mb-0">
            <h1 className="text-2xl font-bold mb-2 sm:mb-0 sm:mr-4">Kevin Duhamel</h1>
            <p className="text-sm text-center sm:text-left">&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
          </div>
          <div className="flex justify-center space-x-4">
            <Button as="a" href="https://github.com/kevinduhamel" color="light" auto aria-label="Github profile" target="_blank" rel="noopener noreferrer">
              <FaGithub size={60} />
            </Button>
            <Button as="a" href="https://linkedin.com/in/kevinduhamel" color="light" auto aria-label="LinkedIn profile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={60} />
            </Button>
          </div>
        </div>
        <div className="text-center text-sm">
          Diseñado y desarrollado con ❤️ en Argentina.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
