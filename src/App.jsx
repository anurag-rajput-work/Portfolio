import { useState } from 'react'
import './App.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
function App() {

 const router = createBrowserRouter(createRoutesFromElements(
    <Route  path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />}/>
      <Route path='projects' element={<Project />}/>
    </Route>
 ));

  return (
    <>
      <RouterProvider  router={router} />
    </>
  )
}

export default App