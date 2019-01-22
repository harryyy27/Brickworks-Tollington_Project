import React from 'react'
import {render, fireEvent, cleanup} from 'react-testing-library'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Nav from './header';

jest.mock('../mainPageComponents/img/headerLogo.js', ()=> ()=> <div>SHHHHHMOCK</div>)
jest.useFakeTimers();
test('testing menu opens and closes', () => {
    //import necessary commands and components
    const {getByTestId, getByText} = render(<Router>
        <Nav />
        </Router>)
   
    const menu = getByTestId('menu')
    const actualMenu = getByTestId('actual-menu')
    expect(actualMenu.className).toBe('menu menu-closed invisible')
   //open menu
    fireEvent.click(menu);
    expect(actualMenu.className).toBe('menu menu-closed');
    jest.advanceTimersByTime(1000);
        expect(actualMenu.className).toBe('menu menu-open')
        fireEvent.click(menu)
    expect(actualMenu.className).toBe('menu menu-closed')
    jest.advanceTimersByTime(1000);
    expect(actualMenu.className).toBe('menu menu-closed invisible')
    //close menu
    
  })