import React from 'react';
import { Button } from "@nextui-org/react";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center mb-6">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold mr-4">Kevin Duhamel</h1>
            <p className="text-sm">&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button as="a" href="https://github.com/kevinduhamel" color="light" auto aria-label="Github profile" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </Button>
            <Button as="a" href="https://linkedin.com/in/kevinduhamel" color="light" auto aria-label="LinkedIn profile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </Button>
            <Button as="a" href="https://twitter.com/kevinduhamel" color="light" auto aria-label="Twitter profile" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
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
