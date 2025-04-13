import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import Departments from "../components/Departments";
import MessageForm from "../components/MessageForm";

const Home = ()=>{
    return <>
        <Hero title={"Welcome to MSCare Medical Institue | Yoir Trusted Healthcare provider"} imageUrl = {"/hero.png"}/>
        <Biography imageUrl={"about2.avif"}/>
        <Departments/>
        <MessageForm/>
    </>;
};

export default Home;