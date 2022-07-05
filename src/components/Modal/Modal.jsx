import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ModalContent from '../ModalContent';
import './modal.css'

const Modal = ({visibleModal , setVisibleModal, total}) => {
    const items = useSelector(state=>state.items);
    let style = visibleModal ? 'overlay actives' : 'overlay'
 

    let res =  items.map((el)=>{
        return  <ModalContent el ={el}/>
      })

    return (
    <div className='modal'>
        <div  className={style}>
	        <div className="popup">
		        <h2>Корзина покупок</h2>
		        <div onClick={()=>{setVisibleModal(false)}} className="close">&times;</div>
		<   div className="content">
            {items.length>0 ? res : <b>Корзина пустая!</b>}
		    </div>
            {items.length>0 ? <div className="order">
                <span>Итоговая стоимость: {total}$</span>
                <button>Оформить заказ</button>
            </div> : ''}
	    </div>
    </div>

    </div>
    );
};

export default Modal;