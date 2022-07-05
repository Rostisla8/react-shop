import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Card = ({item , category}) => {
    let [typeButton , setTypeButton] = useState(false)
    const dispatch = useDispatch();
    const items = useSelector(state=>state.items);

    useEffect(()=>{
        items.forEach(element => {
            if(element.id === item.id){
                setTypeButton(true)
            }
        });
    }, [category])
    

    function addItem(){
        dispatch({type:'ADD_ITEM' , payload:item})
        setTypeButton(true)
    }

    function delItem(){
        dispatch({type:'DEL_ITEM' , payload:item.id})
        setTypeButton(false)
    }

    return (
        <div className='gameCard'>
            <div className="gameCard__wrapper">
                <img className='card_img' src={item.photo} alt="" />
                <h4>{item.name}</h4>
                <div>
                <span className='card__price'>{item.price}$</span>
                {typeButton == false ? 
            <button onClick = {addItem} className='card_button'>Добавить в корзину</button> :
            <button onClick = {delItem} className='card_button_active'>Убрать из корзины</button>
            }
                </div>
            </div>
        </div>
    );
};

export default Card;