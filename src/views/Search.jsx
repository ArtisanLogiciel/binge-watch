import React from 'react';
import Layout from "../components/Layout";
import {Card, Sliders} from "../components/Sliders";





export default function Search() {
    
    
    return (
        <Layout>
            <div className={`fixed top-18 h-25 w-screen bg-gradient-to-t from-grey/40 to-grey/20`}>
            
            </div>
            <div className={`py-43 px-[3.5vw] flex flex-wrap h-full`}>
    
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
    
        
        </Layout>
    )
}


function MyDiv() {
    return (
        <div className={`border h-18 w-36 bg-binge mx-4 my-4`}></div>
    )
}