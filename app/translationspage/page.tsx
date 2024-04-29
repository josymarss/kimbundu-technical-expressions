'use client'
import { useState, useEffect, Fragment } from 'react';
import { data } from '../../data/data';

const TranslationPage = () => {
    const [datafetched, updateDate] = useState([]);
    const [search, updateSearch] = useState('');
    
    useEffect(() => {
        updateDate(data);
    },[]);

    useEffect(()=>{
        
    },[datafetched]);

    const onBuscar = () =>{
        updateDate(data.
            filter(elem => elem.word === search || 
                elem.word.toLocaleLowerCase() === search ||
                 elem.word.toUpperCase() === search) ||
                 elem.word.toLocaleLowerCase() === search.toLocaleLowerCase()); 
    }
    
    const MyData = ()=>(
        datafetched.map((data,index) => (
            <>
                <p className={"styles.title"}>{data.word}</p>
                <div className={"styles.words"} key={index}>
                    <p>{data.translation}</p>
                </div>
               { data.description ?
                    <>
                        <p className={"styles.title"}>Description</p>
                        <div className={"styles.words"} key={index}>
                            <p >{data.description}</p>
                        </div>
                    </>: ""
                }
            </>
        ))     
    );
    
    return(
        <div className={"styles.container"}>
             <div className={"styles.search"}>
                <input 
                    className='w-28'
                    type='submit'
                    required
                    placeholder='Procurar palavra' 
                    onChange={e => updateSearch(e.target.value)}
                />
                <button type='primary' onClick={onBuscar}>
                        Buscar
                </button>
                {/* <Card /> */}
            </div>
            <h2 className='text-red-500'>Traduções</h2>
            
            <MyData />

        </div>
    );
}
export default TranslationPage;