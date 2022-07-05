import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import Circle_card from './Circle_card';
import Modal from './Modal/Modal';
import img from '../img/title.png'
import SearchInput from './SearchInput/SearchInput';

const Navbar = () => {



    const cash = useSelector(state=>state.items);
    const [total , setTotal] = useState(0)
    const [visibleModal , setVisibleModal] = useState(false)
    const dispatch = useDispatch();

    useEffect(()=>{
        let totalPrice = cash.reduce(function(previousValue, item) {
            return previousValue + Number(item.price)
        }, 0)
        setTotal(totalPrice)
    }, [cash])

    function searchItem(itemName){
        dispatch({type:'SEARCH' , payload:itemName})
    }



    return (
        <div className='navbar'>
            <div className="navbar_wrapper">
                    <Link className='navbar__logo' to = '/'>
                    <img style={{maxWidth:'100px'}} src={img} alt="" />
                        SexShop
                    </Link>
                    <SearchInput searchItem = {searchItem}/>
                <div onClick={()=>{setVisibleModal(true)}} className="navbar__basket">
                    <Circle_card  count = {cash.length}/>
                   <MdOutlineShoppingCart color='deeppink' size={50} className = 'basket_logo'/>
                    <br></br>
                    <span className='card__price'>Сумма:  {total}$</span>
                </div>
            </div>
            <Modal visibleModal = {visibleModal} setVisibleModal ={setVisibleModal} total={total}/>
        </div>
    );
};

export default Navbar;