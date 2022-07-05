import React from 'react';

const Categorys = ({categorys , getCategory}) => {




    let res = categorys.map((el , index)=>{
        return <span className='category_item' key = {index} onClick={()=>{getCategory(el)}}>{el}</span>
    })

    return (
        <div className='categorys_wrapper'>
            <div className='categorys_content'>
                <span className='category_title'>Категории</span>
                
                    {res}
                
            </div>
        </div>
    );
};

export default Categorys;