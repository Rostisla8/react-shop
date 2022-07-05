import React from 'react';




const ModalContent = ({el}) => {
    return (
        <div style={{display:'flex' , justifyContent:'space-around' , margin:'10px'}}>
            <img style={{width:'50px' , height:'50px'}} src={el.photo} alt="" />
            <h4>{el.name}</h4>
        </div>
    );
};

export default ModalContent;