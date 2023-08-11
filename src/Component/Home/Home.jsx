import data from '../../assets/data/portfolioData'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';
import Modal from './Modal';

const Home = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

   
    const [nextItems, setNextItems] = useState(6)
    const [portfolios, setPortfolios] = useState(data)
    const [selectTab, setSelectTab] = useState("all")
    const [showModal, setShowModal] = useState(false)
    const [activeId, setActiveId] = useState(null)

  const handleToModal = (id) =>{
    setShowModal(true)
    setActiveId(id)
  }
    useEffect(()=>{
        if(selectTab === 'all'){
            setPortfolios(data)
        }
        if (selectTab === 'web-Design'){
            const filterData = data.filter(item=>item.category === 'Web Design')
            setPortfolios(filterData)
        }
        if(selectTab === 'ux-design'){
            const filterData = data.filter(item=>item.category === 'Ux')
            setPortfolios(filterData)
        }
    },[selectTab])
    const handleTomore = ()=>{
        setNextItems(prev => prev + 3)
    }
    return (
        <div>
           <div className="container  mt-8 mx-auto">
            <div className="flex items-center justify-between flex-wrap">
                <div className="mb-7 sm:mb-0">
                    <h3 className='text-3xl font-bold'>My Resent Projects</h3>
                </div>
                <div className="flex gap-3">
         <button onClick={()=>setSelectTab('all')} className="border border-solid py-2 px-4 rounded-lg border-purple-400">All</button>
         <button onClick={()=>setSelectTab('ux-design')}  className="border border-solid py-2 px-4 rounded-lg border-purple-400">Frontend Design</button>
         <button onClick={()=>setSelectTab('web-Design')}  className="border border-solid py-2 px-4 rounded-lg border-purple-400">Full Stack</button>
         <button className="border border-solid py-2 px-4 rounded-lg border-purple-400">MERN Stack</button>
                </div>
               
                <div className="flex items-center gap-4 flex-wrap mt-12">
                    {
                        portfolios?.slice(0, nextItems).map((portfolio,index)=>(
                         
                            <div data-aos="zoom-in" data-aos-delay='5000' data-aos-duration='1000' className="group max-w-full sm:w-[48.5%] lg:w-[32.2%] relative z-[1]" key={index}>
                                <figure>
                                    <img src={portfolio.imgUrl} alt="" className="rounded-xl" />
                                </figure>
                                <div className="w-full h-full bg-black bg-opacity-40 absolute top-0 left-0 hidden group-hover:block z-[5]">
                         <div className="w-full h-full flex items-center justify-center">
                            <button onClick={()=>handleToModal(portfolio.id)} className='text-white py-2 px-4 bg-slate-500 hover:text-black font-bold hover:bg-green-300 rounded-xl font-2xl ease-in duration-200'>See Details</button>
                         </div>
                                </div>

                            </div>
                            ))
                    }
                </div>
                
            </div>
            {
                    nextItems < portfolios.length && data.length > 6 && (
                        <div className="text-center mt-5">
                        <button onClick={handleTomore} className='text-white py-2 px-4 bg-slate-500 hover:text-black font-bold hover:bg-green-300 rounded-xl font-2xl ease-in duration-200'>See More</button>
                        </div>
                      

                    )
                }
            </div>
            {
            showModal && <Modal activeId={activeId} setShowModal={setShowModal}></Modal>
           }
        </div>
    );
};

export default Home;