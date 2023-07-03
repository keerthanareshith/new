import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import logo from '../assets/img1.png'
import './Login'
const Container = styled.div`
    background-color: orange;
    box-sizing: border-box;
    width:100%;
    height:100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow:auto;

@media screen and (max-width:810px) {
    .container {

        width: 200px;
    }
}

.container {

    position: relative;
    width: 100%;
    height: 100vh;
}

.logo {
    
    margin-left: 50px;
}

@media screen and (max-width:767px) {
    nav {
        background-color: orange;
    }
}

nav {
    background-color: rgb(62, 60, 60);
    display: flex;
    width: 100%;
    margin: auto;
    padding: 0px 0;
    align-items: center;
    justify-content: space-between;
}

nav ul li {
    display: inline-block;
    list-style: none;
    margin: 10px 20px;
}

nav ul li a {
    text-decoration: none;
    color: white;
    font-weight: bold;
}

nav ul li a:hover {
    color: green;
}

.detail {
    text-align: center;
    margin-left: 5%;
    margin-top: 17%;
}

.title {
    font-size: 6vw;
}

.detail h1 {
    color: #212221;
    margin-bottom: 0px;
    margin-left: 10px;
    margin-top: 10px;
    color: antiquewhite;

}

h3 {
    font-size: 2vw;
}

h3 {
    margin-top: 0px;
    color: white;
    margin-left: 10px;
}

.spotify {
    height: 50px;
    width: 300px;
    border-radius: 100px 100px 100px 100px;
    background-color: green;
    text-align: center;
    font-family: Arial;
    color: white;
    font-weight: bolder;
    font-size: 20px;
    border: orange
}

ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    font-size: 1.5vw;

}

@media screen and (max-width:900px) {
    ul {

        display: block;
        list-style-type: disc;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 40px;

    }
}

@media screen and (max-width: 880px) {

    .title {
        font-size: 5vw;
    }

    h3 {
        font-size: 2vw;
    }


}

@media screen and (max-width:768px) {
    .spotify {
        height: 10px;
        width: 100px;
        border-radius: 50px 50px 50px 50px;
        background-color: green;
        text-align: center;
        font-family: Arial;
        color: white;
        font-weight: lighter;
        font-size: 5px;
        border: orange
    }
}
`;
const Home = () => {
    const [value, setValue] = useState(0);
    useEffect(() => {
        console.log(value);
    }, [value])
    return (
        <Container>
            <div class="nav">
                <nav>
                    <div class="logo">
                        <img src={logo} width="150px" height="40px" />
                    </div>
                    <ul>
                        <li><a href="">Premium</a></li>
                        <li><a href="">Help</a></li>
                        <li><a href="">Download</a></li>
                        <li><a>|</a></li>
                        <li><a href="">Sign up</a></li>
                        <li><a href="Login">Log In</a></li>
                    </ul>
                </nav>
            </div>
            <div class="detail">
                <h1 class="title">Music for everyone.</h1>
                <h3>Millions of songs. No credit card needed.</h3>
                <div class="div3"><h2>Count : {value}</h2></div>
                <button type="button" class="spotify" onClick={() => setValue(value + 1)}>UPDATE</button>
            </div>


        </Container>
    )
}

export default Home