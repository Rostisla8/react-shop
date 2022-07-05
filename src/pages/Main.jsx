import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/Card';
import Categorys from '../components/Categorys';
import CategorysArray from '../utils/CategorysArray';

const Main = () => {
    let [items , setItems] = useState([])
    let [searchItems , setSearchItems]  = useState([])
    let [category , setCategory] = useState('Все')
    const searchString = useSelector(state=>state.searchString);
    
    function getCategory(categoryName){
        setCategory(categoryName)
    }


    useEffect(()=>{
        async function fetchData(){
            let data = await fetch('http://learnPhp/posts')
            let res = await data.json()
            setItems(res)
        }
        fetchData()
    },[])
    
    let cetegoryItems = useMemo(()=>{
        if(category != 'Все'){
            return items.filter(item => item.category == category)
        }
        return items
    } ,[category , items])


    let searchAndFiltered = useMemo(()=>{
        if(searchString.length != 0){
            cetegoryItems.filter((el)=>{
                return el.name.toLowerCase().includes(searchString.toLowerCase())
             })
        }else{
            return cetegoryItems
        }

    } ,[searchString, items])

    


    let cards = cetegoryItems.map((item)=>{
        console.log(cetegoryItems)
        return <Card item = {item} key = {item.id} category = {category}/>
    })

    return (
        <div className='Main'>
            <div className="main__wrapper">
                <div className='asside_pannel'>
                    <Categorys categorys = {CategorysArray} getCategory = {getCategory}/>
                </div>
                <div className="content_wrapper">
                    {cards}
                </div>
            </div>
        </div>
    );
};

export default Main;