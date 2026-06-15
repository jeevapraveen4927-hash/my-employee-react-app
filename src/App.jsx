import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import Student from './components/Student'


function App() {
  return (
    <div>
      <ListEmployeeComponent />
      

      <Student
        name="John Doe"
        age={20}
        course="Computer Science"
      />

      <Student
        name="Jane Smith"
        age={21}
        course="Information Technology"
      />
    </div>
  );
}

export default App
