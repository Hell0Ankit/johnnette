import React, { useState } from 'react';
import Brochure from './Brochure';

const AskDemo = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        
        <>
            <div className="body-container flex justify-center gap-6">
                <button 
                    className='btn btn-primary' 
                    onClick={(e) => {
                        e.preventDefault(); 
                        setIsOpen(true); 
                    }} 
                > 
                    Brochure 
                </button>
                
                <a href='/contact#contact' className='btn btn-primary'> 
                    Ask for a demo 
                </a>
            </div>

           
            <Brochure isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    );
};

export default AskDemo;