"use client";
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

const Component = () => {
  return (
    <Navbar className='bg-black text-gray-200 min-h-[100px]' position="sticky">
      <NavbarBrand className="text-white text-2xl">
        <p className="font-bold text-inherit">Bienvenidos</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-10 " justify="center">
        <NavbarItem >
          <Link color="foreground" className="text-white text-xl" href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" color="foreground" className="text-white text-xl" aria-current="page">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className="text-white text-xl" href="#">
            Blog
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        
        <NavbarItem>
          <Button as={Link} className="text-emerald-400 text-xl border-emerald-400 p-5" color="primary" href="#" variant="bordered">
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
export default Component;

