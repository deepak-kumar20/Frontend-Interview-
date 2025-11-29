import React, { useState } from 'react';
import "./App.css"

const Accordian = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);
    const handleIndex = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }
    return (
      <div className='container'>
        Accordian Component
        {items.map((item, index) => (
          <div  key={index}>
            <button className='title' onClick={() => handleIndex(index)}>{item.title}</button>
            {openIndex === index && <div className='content'>{item.content} </div>}
          </div>
        ))}
      </div>
    );
}
export default Accordian;