import React from 'react';
import data from '../../assets/data/portfolioData'
import { FaWindowClose } from 'react-icons/fa';

const Modal = ({activeId, setShowModal}) => {
    const portfolio = data.find(portfolio => portfolio.id === activeId)
    return (
        <div className='h-full w-full fixed top-0 left-0 z-10 bg-black bg-opacity-40'>
          
          <div className="max-w-[600px] absolute top-1/2 left-1/2 z-20 bg-white rounded-xl transform -translate-x-1/2 -translate-y-1/2">
          <div>
          <figure>
 <img className='rounded-xl' src={portfolio.imgUrl} alt="" />
 </figure>
          </div>
          <div className='px-4'>
            <h2 className="text-2xl font-bold  my-5">{portfolio.title}</h2>
            <p className='text-[15px] loading-7 text-gray-400'>{portfolio.description}</p>
            <div className="mt-5 flex items-center flex-wrap gap-3">
            <h2 className='text-[18px] font-bold'>Technologies</h2>
            {
                portfolio.technologies.map((item, index)=>(
                    <span key={index} className='bg-gray-200  py-1 px-2 rounded-lg text-[14px] loading-0'>{item}</span>
                    ))
            }
            
            </div>
            <a href={portfolio.siteUrl}>
                <button className='bg-primary text-white px-4 py-2 my-8 rounded-lg font-semibold hover:bg-black ease-in duration-300'>Live Site</button>
            </a>
          </div>
          <button onClick={()=>setShowModal(false)} className='w-[1.8rem] h-[1.8rem] bg-white absolute top-[1.9rem] right-[1.8rem] text-[25px] items-center flex justify-center rounded-lg leading-10 cursor-pointer'><FaWindowClose className=' text-red-400'></FaWindowClose></button>
          </div>
        </div>
    );
};

export default Modal;