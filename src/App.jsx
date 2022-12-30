import { Link, Route } from "wouter";
import { useState } from 'react'
import { Header } from './components/header/index.jsx';
import { HomePage } from './pages/home-page/index.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Route path="/" component={HomePage} />
    </div>
  )
}

export default App
