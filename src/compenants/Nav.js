import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';


export default function Nav() {
    return (
        <nav>
          <ul>
            <li>
              <Link to="/calculatrice">Calculatrice</Link>
            </li>
            <li>
              <Link to="/todo">Todo List</Link>
            </li>
            <li>
              <Link to="/weather">Weather App</Link>
            </li>
          </ul>
        </nav>
      );
}
