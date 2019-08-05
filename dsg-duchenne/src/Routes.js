import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from './views/Home';
import WhatIsDuchenne from './views/About-Duchenne/What-is';
import Diagnostic from './views/About-Duchenne/Diagnostic';
import Stages from './views/About-Duchenne/Stages';
import Guide from './views/About-Duchenne/Guide';
import Mision from '../src/views/sobre nosotres/Mision'
import News from './views/News';
import Sumate from './views/Sumate';





const Routes = () =>{
    return(
        <Switch>
            <Route exact path='/' component = {Home}/>  
            <Route exact path='/News' component = {News}/>
            <Route exact path='/Home' component = {Home}/>
            <Route path='/nuestra-mision' component ={Mision}/>
            <Route path='/que-es-duchenne' component = {WhatIsDuchenne}/>  
            <Route path='/diagnostico' component = {Diagnostic}/>  
            <Route path='/etapas' component = {Stages}/>
            <Route path='/guia-para-padres' component = {Guide}/>
            <Route path='/sumate' component = {Sumate}/>


        </Switch>
    )
}
export default Routes;