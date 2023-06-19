import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import { useState } from 'react';
import { Dashboard } from './Dashboard';
import { Login } from './Login';
import { Register } from './Register';
import { Forgotpass } from './Forgotpass';
import { Color } from './utilities/Color';
import { Button } from './Button';
import { Cards } from './Cards';
import { Animation } from './utilities/Animation';
import { Border } from './utilities/Border';
import { Charts } from './Charts';
import { Table } from './Table';
import { Blank } from './Blank';
import { Notfound } from './404Notfound';
import { Other } from './utilities/Other';
function App() {
const [sidebar,setsidebar]=useState(false)
const [page,setpage]=useState(false)
const [components,setcomponents]=useState(false)
const [utilities,setutilities]=useState(false)

  return (
    <div className="App">
      <Routes>
<Route path='/' element={<Dashboard sidebar={sidebar} setsidebar={setsidebar} page={page} setpage={setpage} components={components} setcomponents={setcomponents} utilities={utilities} setutilities={setutilities}/>}/>
<Route path='/buttons' element={<Button sidebar={sidebar} setsidebar={setsidebar} page={page} setpage={setpage} components={components} setcomponents={setcomponents} utilities={utilities} setutilities={setutilities}/>}/>
<Route path='/cards' element={<Cards sidebar={sidebar} setsidebar={setsidebar} page={page} setpage={setpage} components={components} setcomponents={setcomponents} utilities={utilities} setutilities={setutilities}/>}/>
<Route path='/animations' element={<Animation sidebar={sidebar} setsidebar={setsidebar} page={page} setpage={setpage} components={components} setcomponents={setcomponents} utilities={utilities} setutilities={setutilities}/>}/>
<Route path='/borders' element={<Border sidebar={sidebar} setsidebar={setsidebar} page={page} setpage={setpage} components={components} setcomponents={setcomponents} utilities={utilities} setutilities={setutilities}/>}/>
<Route path='/charts' element={<Charts sidebar={sidebar} setsidebar={setsidebar} page={page} setpage={setpage} components={components} setcomponents={setcomponents} utilities={utilities} setutilities={setutilities}/>}/>
<Route path='/colors' element={<Color sidebar={sidebar} setsidebar={setsidebar} page={page} setpage={setpage} components={components} setcomponents={setcomponents} utilities={utilities} setutilities={setutilities}/>}/>
<Route path='/tables' element={<Table sidebar={sidebar} setsidebar={setsidebar} page={page} setpage={setpage} components={components} setcomponents={setcomponents} utilities={utilities} setutilities={setutilities}/>}/>
<Route path='/blank' element={<Blank sidebar={sidebar} setsidebar={setsidebar} page={page} setpage={setpage} components={components} setcomponents={setcomponents} utilities={utilities} setutilities={setutilities}/>}/>
<Route path='/notfound' element={<Notfound sidebar={sidebar} setsidebar={setsidebar} page={page} setpage={setpage} components={components} setcomponents={setcomponents} utilities={utilities} setutilities={setutilities}/>}/>
<Route path='/other' element={<Other sidebar={sidebar} setsidebar={setsidebar} page={page} setpage={setpage} components={components} setcomponents={setcomponents} utilities={utilities} setutilities={setutilities}/>}/>





    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/forgotpass" element={<Forgotpass/>}/>





</Routes></div>
  );
}

export default App;
