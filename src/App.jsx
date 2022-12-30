import { Link, Route } from "wouter";
import { useState } from 'react'
import { Header } from './components/header/index.jsx';
import { HomePage } from './pages/home-page/index.jsx';
import './App.css'

function App() {
  return (
    <div className="App">
      <Route path="/portfolio" component={HomePage} />
      <Route path="/" component={HomePage} />
    </div>
  )
}

export default App
