import React from 'react';
import { Avatar, Button } from "@nextui-org/react";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  return (
    <main className='w-full h-full gap-10 p-12 bg-slate-200 flex flex-col md:flex-row items-center justify-center  space-y-6 md:space-y-0 md:space-x-8 transition-all duration-500 ease-in-out'>    
      <Avatar src="/hero.jpg"  className="w-[380px] h-[380px] border-4 border-slate-500 " />
      <div className='text-slate-700 space-y-4'>
        <h1 className='text-4xl font-bold tracking-wide text-slate-900'>Kevin Duhamel Hayes</h1>
        <h2 className='text-2xl font-semibold'>Full Stack Developer</h2>
        <h3 className='text-lg italic'>In constant learning</h3>
        <p className='text-m md:max-w-md'>
        ¡Hola! Soy Kevin, apasionado por las tecnologías web y siempre ansioso por explorar nuevas herramientas. Con experiencia en la construcción de aplicaciones web escalables y eficientes utilizando marcos modernos. Este es mi escaparate digital, donde presento algunos de mis proyectos de desarrollo más interesantes. Estoy emocionado de compartirlos contigo y espero que disfrutes tu visita.
        </p>
        <div className="flex space-x-4 mt-4">
          <Button color="secondary" variant='bordered' auto onClick={() => window.open('https://github.com/kevinduhamelhayes', '_blank')} className="px-10 py-5 border-2 text-xl transform hover:scale-105 transition-transform duration-300">
            <FaGithub className="mr-2" /> Github
          </Button>
          <Button color="primary" variant= "bordered" auto onClick={() => window.open('https://www.linkedin.com/in/kevin-duhamel-hayes', '_blank')} className="px-10 py-5 border-2 text-xl transform hover:scale-105 transition-transform duration-300 ">
            <FaLinkedin className="mr-2" /> LinkedIn
          </Button>
        </div>
      </div>
    </main>
  );
}

export default Hero;

