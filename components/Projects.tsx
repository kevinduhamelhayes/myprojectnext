import React from "react";
import {Card, CardHeader, CardBody, Image, Button, Divider} from "@nextui-org/react";

export default function components() {
  return (
    <div>
    <div className="flex flex-col items-center justify-center space-y-4 bg-slate-700 p-8 rounded-md shadow-lg">
    
    <h1 className="text-3xl font-bold text-white">Me encuentro continuamente experimentando</h1>
    <p className="text-xl text-slate-300">Aquí debajo encontrarás algunos de mis proyectos</p>
    <p className="text-lg text-slate-200">Si quieres ver más puedes visitar mi GitHub</p>
    
</div>
<div className="flex flex-wrap justify-center items-start max-w-full w-full gap-10 p-10 bg-slate-600">
    
    <Card className="mx-2 my-4 w-full md:w-[300px] transition-transform transform hover:scale-105 p-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-lg mb-2">Nombre del Proyecto</h4>
        <small className="text-default-500">Web Application</small>
      </CardHeader>
      <Divider />
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Screenshot del proyecto"
          className="object-cover rounded-xl"
          src="/path/to/project/image.jpg"
          layout="responsive"
          height={200}
          width={300}
        />
      </CardBody>
      <Divider />
      <div className="p-4 flex justify-end">
        <Button as="a" href="https://link-to-project.com" target="_blank" rel="noopener noreferrer" size="small" auto>
          Ver Proyecto
        </Button>
      </div>
    </Card>
    <Card className="mx-2 my-4 w-full md:w-[300px] transition-transform transform hover:scale-105 p-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-lg mb-2">Nombre del Proyecto</h4>
        <small className="text-default-500">Web Application</small>
      </CardHeader>
      <Divider />
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Screenshot del proyecto"
          className="object-cover rounded-xl"
          src="/path/to/project/image.jpg"
          layout="responsive"
          height={200}
          width={300}
        />
      </CardBody>
      <Divider />
      <div className="p-4 flex justify-end">
        <Button as="a" href="https://link-to-project.com" target="_blank" rel="noopener noreferrer" size="small" auto>
          Ver Proyecto
        </Button>
      </div>
    </Card>
    <Card className="mx-2 my-4 w-full md:w-[300px] transition-transform transform hover:scale-105 p-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-lg mb-2">Nombre del Proyecto</h4>
        <small className="text-default-500">Web Application</small>
      </CardHeader>
      <Divider />
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Screenshot del proyecto"
          className="object-cover rounded-xl"
          src="/path/to/project/image.jpg"
          layout="responsive"
          height={200}
          width={300}
        />
      </CardBody>
      <Divider />
      <div className="p-4 flex justify-end">
        <Button as="a" href="https://link-to-project.com" target="_blank" rel="noopener noreferrer" size="small" auto>
          Ver Proyecto
        </Button>
      </div>
    </Card>
    <Card className="mx-2 my-4 w-full md:w-[300px] transition-transform transform hover:scale-105 p-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-lg mb-2">Nombre del Proyecto</h4>
        <small className="text-default-500">Web Application</small>
      </CardHeader>
      <Divider />
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Screenshot del proyecto"
          className="object-cover rounded-xl"
          src="/path/to/project/image.jpg"
          layout="responsive"
          height={200}
          width={300}
        />
      </CardBody>
      <Divider />
      <div className="p-4 flex justify-end">
        <Button as="a" href="https://link-to-project.com" target="_blank" rel="noopener noreferrer" size="small" auto>
          Ver Proyecto
        </Button>
      </div>
    </Card>
  </div>
  </div>
      );
    }
    