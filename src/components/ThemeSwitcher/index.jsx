import React from 'react';
import { Icone } from '../../UI/components';
import { LightOff, LightOn } from '../../UI/svgs';

const claro = <Icone src={LightOff} alt="Tema claro"/>
const escuro = <Icone src={LightOn} alt="Tema escuro"/>

export default ({ tema }) => (tema ? claro : escuro);