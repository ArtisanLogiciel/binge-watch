import React, {useState} from 'react';
import Layout from "../components/Layout";
import {Card, Sliders} from "../components/Sliders";





export default function Search() {
    
    const [focus, setFocus] = useState(false)
    
    function handleFocus(e) {
        console.log(e.nativeEvent.type)
    }
    
    return (
        <Layout onClick={()=>setFocus(false)}>
            <div className={`fixed top-18 h-25 w-screen bg-grey-dark z-50 overflow-hidden`}>
                <div className={`absolute h-43 w-screen bg-gradient-to-t from-grey-light/25 transition-all duration-500 ${focus ? '-top-18' : 'top-0'}`} />
                    <input type="text"
                           onFocus={(e)=> {
                               e.preventDefault()
                               setFocus(true)
                           }}
                           placeholder='Titre, personnage ou genre'
                           className={`absolute top-0 h-25 w-full px-[3.5vw] bg-transparent
                           text-5xl font-bold leading-loose
                           focus:outline-none
                           `}/>
            </div>
            <div className={`py-43 px-[3.5vw] flex flex-wrap h-full mx-auto`}
                 onClick={()=>setFocus(false)}>
    
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
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