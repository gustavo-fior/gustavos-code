import { Alura, Softgraf } from "../../UI/svgs";
import React from "react";
import { useTheme } from "styled-components";
import CursoAlura from "../CursoAlura/index";
import CursoSoftgraf from "../CursoSoftgraf";

const Cursos = () => {
  const theme = useTheme();

  return (
    <>
      <CursoAlura icone={Alura}/>
      <CursoSoftgraf icone={Softgraf} />
    </>
  );
};

export default Cursos;
