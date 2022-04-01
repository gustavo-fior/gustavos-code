import { Alura, Softgraf } from "../../UI/svgs";
import React from "react";
import CursoAlura from "../CursoAlura/index";
import CursoSoftgraf from "../CursoSoftgraf";

const Cursos = () => {
  return (
    <>
      <CursoAlura icone={Alura}/>
      <CursoSoftgraf icone={Softgraf} />
    </>
  );
};

export default Cursos;
