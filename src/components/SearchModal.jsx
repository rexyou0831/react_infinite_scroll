import { AiOutlineClose } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const SearchModal = () => {

  // Control Modal
  const [show, setShow] = useState(false);

  const showCtrl = () => { setShow(!show) }
  const closeModal = () => { setShow(false) }

  const ages = [];
  for(var i=0; i < 100; i++){
    ages.push(<option value={ i } key={ i }>{ i }</option>)
  }
  
  return (
    <>
    <button className=' fixed w-12 h-12 bg-black bottom-28 right-0 rounded-tl-lg rounded-bl-lg text-white flex items-center justify-center' onClick={ showCtrl }>
        <FaSearch className='text-2xl' />
    </button>
    
    {show ? 
      <div className="fixed flex h-screen w-full top-0 left-0 justify-center items-center">
        <div className="fixed w-screen h-screen top-0 left-0 bg-black opacity-60"></div>
        <div className="z-10 bg-white w-11/12 max-w-sm rounded-xl p-8 block">
          <AiOutlineClose className=" float-right hover:cursor-pointer" onClick={ closeModal } />
          <div className="mt-5">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="search">Search</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="search" type="text" placeholder="Name, username or email"></input>
          </div>
          <div className="mt-5">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">Age</label>
            <div className="inline-block relative w-full">
              <select className="block appearance-none w-full border px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" defaultValue="fake_option">
                <option disabled value="fake_option">---- Please select age ----</option>
                { ages }
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 bottom-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">Gender</label>
            <div className="inline-block relative w-full">
              <select className="block appearance-none w-full border px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" defaultValue="fake_option">
                <option disabled value="fake_option">---- Please select gender ----</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 bottom-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-10">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-3/6 mr-4" type="button">
              Search
            </button>
            <button className=" bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-3/6" type="button" onClick={ closeModal }>
              Cancel
            </button>
          </div>
        </div>
      </div> 
    : ""}
    </>
      
    
  )
}

export default SearchModal