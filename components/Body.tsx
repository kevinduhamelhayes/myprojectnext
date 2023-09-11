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
    <div className="flex flex-wrap justify-center items-start max-w-full w-full gap-10 p-10 bg-slate-600">

      {/* Frontend Card */}
<Card className="max-w-[400px] min-h-[350px] p-5">
  <CardHeader>
    <h4 className="text-2xl font-semibold">Frontend</h4>
  </CardHeader>
  <Divider />
  <CardBody>
    <p>Creating visually appealing websites and applications for an optimal user experience.</p>
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
<Card className="max-w-[400px] min-h-[350px] p-5">
  <CardHeader>
    <h4 className="text-2xl font-semibold">Backend</h4>
  </CardHeader>
  <Divider />
  <CardBody>
    <p>Building scalable server-side applications and APIs for seamless frontend integration.</p>
  </CardBody>
  <Divider />
  <CardFooter className="flex flex-wrap justify-center">
    <DiNodejs color="#68A063" size={50} />
    <DiPython color="#3776AB" size={50} />
  </CardFooter>
</Card>

{/* Databases Card */}
<Card className="max-w-[400px] min-h-[350px] p-5">
  <CardHeader>
    <h4 className="text-2xl font-semibold">Databases</h4>
  </CardHeader>
  <Divider />
  <CardBody>
    <p>Storing, retrieving, and managing data efficiently using various database technologies.</p>
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
<Card className="max-w-[400px] min-h-[350px] p-5">
  <CardHeader>
    <h4 className="text-2xl font-semibold">DevOps</h4>
  </CardHeader>
  <Divider />
  <CardBody>
    <p>Automating, optimizing, and monitoring the deployment pipeline for efficiency.</p>
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