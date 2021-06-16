import React, { Component } from 'react';
import './App.css';
import ClickDiv from './compo/ClickDiv';
import Drop from './compo/Drop';
import Nav from './compo/nav';
//import { Suspense, lazy } from 'react';
// import PersonList from './compo/getrqst';
// import PersonListPost from './compo/postrqst';
// import PersonListDlt from './compo/dltrqst';
// const Test = lazy(() => import('./compo/test'));
// const MultipleApi = lazy(() => import('./compo/multipleApi'));
import ParentAPI from "./compo/ParentAPI";
import Tut1 from './compo/tut1';


class App extends React.Component {
  
  render() {
    return (
      <div className="app">
      
       <Nav/>
       <Tut1 />
         {/* <ParentAPI /> */}
        {/* <Drop />
        <ClickDiv/> */}


        {/* <Suspense fallback={<div>please wait...Test is loading</div>}>
          <Test />
        </Suspense>

        <Suspense fallback={<div>please wait...Multiple API is loading</div>}>
          <MultipleApi />
        </Suspense> */}

        {/* <PersonListPost />  
           <PersonList />     
           <PersonListDlt />   */}
      </div>
    );
  }

}

export default App
