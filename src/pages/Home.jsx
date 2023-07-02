import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import logo from '../assets/img1.png'
import './Home.css'
const Home = () => {
    const [value, setValue] = useState(0);
    useEffect(() => {
        console.log(value);
    }, [value])
    return (
        <div class="container">
            <nav>
                <img class="logo" src={logo} width="200px" height="70px" />
                <ul>
                    <li><a href="">Premium</a></li>
                    <li><a href="">Help</a></li>
                    <li><a href="">Download</a></li>
                    <li><a>|</a></li>
                    <li><a href="">Sign up</a></li>
                    <li><a href="">Log In</a></li>
                </ul>
            </nav>
            <div class="detail">
                <h1 class="title">Music for everyone.</h1>
                <h3>Millions of songs. No credit card needed.</h3>
                <div class="div3"><h2>Count : {value}</h2></div>
                <button type="button" class="spotify" onClick={() => setValue(value + 1)}>UPDATE</button>
            </div>

        </div>
    )
}

export default Home