import React from 'react';
import { Avatar, Button } from "@nextui-org/react";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  return (
    <main className='w-full h-full bg-slate-300 flex flex-col md:flex-row items-center justify-center p-6 space-y-6 md:space-y-0 md:space-x-8 transition-all duration-500 ease-in-out'>    
      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" className="w-60 h-60 text-large transform hover:scale-105" />
      <div className='text-black space-y-4'>
        <h1 className='text-4xl font-bold tracking-wide'>Kevin Duhamel Hayes</h1>
        <h2 className='text-2xl font-semibold'>Full Stack Developer</h2>
        <h3 className='text-lg italic'>In constant learning</h3>
        <p className='text-sm md:max-w-md'>
          Passionate about web technologies and always eager to explore new tools. Experienced in building scalable and efficient web applications using modern frameworks.
        </p>
        <div className="flex space-x-4 mt-4">
          <Button color="secondary" variant='bordered' auto onClick={() => window.open('https://github.com/yourUsername', '_blank')} className="transform hover:scale-105 transition-transform duration-300">
            <FaGithub className="mr-2" /> Github
          </Button>
          <Button color="primary" variant= "bordered" auto onClick={() => window.open('https://linkedin.com/in/yourProfile', '_blank')} className="transform hover:scale-105 transition-transform duration-300">
            <FaLinkedin className="mr-2" /> LinkedIn
          </Button>
        </div>
      </div>
    </main>
  );
}

export default Hero;

