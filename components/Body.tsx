import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import {
  FaReact,
  FaJsSquare,
  FaGitAlt,
  FaCss3Alt,
  FaHtml5,
  FaDocker,
  FaWordpress,
} from "react-icons/fa";
import {
  DiPython,
  DiNodejs,
  DiMongodb,
  DiMysql,
  DiBootstrap,
} from "react-icons/di";
import {
  SiTypescript,
  SiPostgresql,
  SiAmazonaws,
  SiGraphql,
  SiRedux,
  SiFirebase,
  SiTailwindcss,
} from "react-icons/si";
export default function App() {
  return (
    <div className="flex flex-wrap justify-center items-start max-w-full w-full gap-10 p-10 bg-slate-200">

      {/* Frontend Card */}
<Card className="max-w-[400px] min-h-[350px] h-[480px] shadow-2xl shadow-slate-700 p-5">
  <CardHeader>
    <h4 className="text-2xl font-semibold">Frontend</h4>
  </CardHeader>
  <Divider />
  <CardBody>
  <p>El eje central de mi trabajo como desarrollador es <strong>crear sitios web y aplicaciones visualmente impactantes</strong>. Sin embargo, no solo me concentro en la apariencia; para mí, es esencial que los sitios y aplicaciones no solo sean atractivos, sino también funcionales y amigables para el usuario. Por ello, busco garantizar una <strong>experiencia de usuario óptima</strong>,mi objetivo es que cada usuario pueda apreciar y disfrutar ese esfuerzo.</p>
  </CardBody>
  <Divider />
  <CardFooter className="flex flex-wrap justify-center">
    <FaJsSquare color="#F0DB4F" size={50} />
    <FaReact color="#61DAFB" size={50} />
    <FaCss3Alt color="#264de4" size={50} />
    <FaHtml5 color="#e34c26" size={50} />
    <DiBootstrap color="#7952B3" size={50} />
    <SiTailwindcss color="#38B2AC" size={50} />
  </CardFooter>
</Card>

{/* Backend Card */}
<Card className="max-w-[400px] min-h-[350px] h-[480px] shadow-2xl shadow-slate-700  p-5">
  <CardHeader>
    <h4 className="text-2xl font-semibold">Backend</h4>
  </CardHeader>
  <Divider />
  <CardBody>
    <p>Mi viaje en programación comenzó con Python, explorando áreas como redes neuronales y usando herramientas como Jupyter Notebooks. Aunque con el tiempo me incliné más hacia el desarrollo frontend, mi experiencia en backend sigue siendo valiosa. Siempre estoy dispuesto a enfrentar nuevos desafíos y aportar en cualquier sector del desarrollo, sea cual sea el papel que deba desempeñar.</p>
  </CardBody>
  <Divider />
  <CardFooter className="flex flex-wrap justify-center">
    <DiNodejs color="#68A063" size={50} />
    <DiPython color="#3776AB" size={50} />
  </CardFooter>
</Card>

{/* Databases Card */}
<Card className="max-w-[400px] min-h-[350px] h-[480px] shadow-2xl shadow-slate-700 p-5">
  <CardHeader>
    <h4 className="text-2xl font-semibold">Databases</h4>
  </CardHeader>
  <Divider />
  <CardBody>
    <p>Si bien las bases de datos no representan mi especialidad principal, poseo una experiencia sólida en diversas plataformas. Siempre he creído en la importancia de adaptarme a las necesidades específicas de cada cliente, y en ese sentido, he tenido la oportunidad de trabajar y familiarizarme con diferentes bases de datos. A continuación, presento algunas de las bases de datos con las que he colaborado</p>
  </CardBody>
  <Divider />
  <CardFooter className="flex flex-wrap justify-center gap-4">
    <DiMongodb color="#4DB33D" size={50} />
    <DiMysql color="#4479A1" size={50} />
    <SiPostgresql color="#336791" size={50} />
    <SiGraphql color="#E10098" size={50} />
  </CardFooter>
</Card>

{/* DevOps Card */}
<Card className="max-w-[400px] min-h-[350px] h-[480px] shadow-2xl shadow-slate-700 p-5">
  <CardHeader>
    <h4 className="text-2xl font-semibold">DevOps</h4>
  </CardHeader>
  <Divider />
  <CardBody>
  <p>Aunque no soy un experto en todos los servicios en la nube, tengo experiencia con varios y siempre estoy dispuesto a aprender sobre los nuevos. Me adapto rápidamente para satisfacer las necesidades del proyecto y asegurarme de que se entregue una solución efectiva. A continuación, encontrarás algunos de los servicios de nube con los que he trabajado.</p>
  </CardBody>
  <Divider />
  <CardFooter className="flex flex-wrap justify-center gap-4">
    <FaGitAlt color="#F34F29" size={50} />
    <FaDocker color="#0db7ed" size={50} />
    <SiAmazonaws color="#FF9900" size={50} />
    <FaWordpress color="#21759B" size={50} />
    <SiFirebase color="#FFCA28" size={50} />
  </CardFooter>
</Card>
    </div>
  );
}