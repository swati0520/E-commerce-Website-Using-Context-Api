import { data } from '@remix-run/router';
import React, { useContext, useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Button, Modal } from 'antd';
import { IoEyeOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import CartContext from '../context/cartcontext';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const Home = () => {
  let ctx = useContext(CartContext)
  console.log(ctx);
  let search = ctx.searchValue
  console.log(search);
  
  
  let navigate = useNavigate();

  const [products, setProducts ] = useState([]);
  const [loading, setloading] = useState(false);
  console.log(products);
  let getAllData = async()=>{

    setloading(true)
    let res = await fetch('https://dummyjson.com/products?limit=0');
    let data = await res.json();
    console.log(data);
    setloading(false)
    setProducts(data.products) 

  }
  useEffect(()=>{
    getAllData();
  },[])
  const handelclick=(ele)=>{
console.log(ele);
  }
  // let cartArr = []
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedObj, setselectedObj] = useState("");
  const showModal = (ans) => {
    console.log(ans);
    setselectedObj(ans)
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //                                             Pagination work


let filteredArr = products.filter((ele)=>ele.title.toLowerCase().includes(search) || ele.category.toLowerCase().includes(search)
 || ele.brand?.toLowerCase().includes(search))
console.log(filteredArr);

  const [currentPage, setcurrentPage] = useState(1);
  let itemPerPage = 20;
  let lastIndex = currentPage * itemPerPage;
  let firstIndex = lastIndex - itemPerPage; 
  let sliceArr = filteredArr.slice(firstIndex,lastIndex)
  console.log( sliceArr);
  let noOfButton = Math.ceil(filteredArr.length / itemPerPage)
  console.log(noOfButton);

  const handelNext = ()=>{
    if(currentPage < noOfButton){
      setcurrentPage(currentPage +1)
    }
  }
  const handelPrevious = ()=>{
   console.log();
    if(currentPage > 1){
      setcurrentPage(currentPage -1)
    }
  }

  let btnArr = []
  for(let i = 1; i < noOfButton; i++){
    btnArr.push(i)
  }
  console.log(btnArr);
  
const handelNums = (ans)=>{
console.log(ans);
setcurrentPage(ans)
  }


//  Pagination part ends here


return (
  <div>


 
    {
    loading===true ?   <div className='w-[80%] m-auto grid grid-cols-12 gap-2 mt-40'>
    {
     Array(8).fill(0).map(()=>{
       return <div className='h-[200px]  lg:col-span-3 md:col-span-4 sm:span-6 col-span-12'>
     <SkeletonTheme baseColor="#202020" highlightColor="#444">
       <p>
         <Skeleton height={'100%'}/>
       </p>
     </SkeletonTheme>
       </div>
     })
   
    }
   </div>:   <div className='py-12 m-auto  bg-slate-500'>
    <Modal width={800} title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
   <div >
   <div className='flex items-center gap-3 bg-slate-300 md:flex-row flex-col'>
   <div><img className=''src={selectedObj.thumbnail}alt="" /> </div>
   <div>
      <h3 className='text-2xl'>Title: {selectedObj.title}</h3>
      <p className='my-1'><b>Category:</b> {selectedObj.category}</p>
     {selectedObj.brand &&  <p className='my1'p><b>Brand:</b> {selectedObj.brand}</p>}
      <p pclassName='my1'><b>Price:</b> {selectedObj.price}</p>
      <p className='my1'><b>Rating:</b> {selectedObj.rating}</p>
      <p className='my1'><b>Description:</b> {selectedObj.description}</p>
      <p className='my1'><b>Discount:</b> {selectedObj.discount}%</p>
      <p className='my1'><b>Stock:</b> {selectedObj.stock}</p>
    </div>
   </div>
   <div>
    <h3 >Reviews</h3>
 <div className='grid grid-cols-12 gap-2 my-3 w-[80%] mx-auto '>
 {selectedObj?.reviews?.map((ele)=>{
      return <div className='bg-slate-300 lg:col-span-4 md:col-span-6  col-span-12  p-6 '>
        <p><b>username:</b> {ele.reviewerName}</p>
        <p><b>useremail:</b> {ele.reviewerEmail}</p>
        <p><b>rating:</b>{ele.rating}</p>
        <p><b>comment:</b>{ele.comment}</p>
      </div>
    })}
 </div>
   </div>
   
   </div>
    </Modal>
    <div className='grid grid-cols-12 gap-2'>
    {
    sliceArr.map((ele,i)=>{
      return  <Card key={ele.id} className=' relative flex-col justify-between lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12 ' sx={{backgroundColor:''}} >
       
        <IoEyeOutline onClick={()=>showModal(ele)} className='absolute size-5 right-2 top-4 '/>
          
     
      <img src={ele.thumbnail} className='w-[50%] h-[50%] m-auto '/>
      <CardContent className=' h-max '>
        <Typography gutterBottom variant="h6" component="div">
        {ele.title }
        </Typography>
      
      </CardContent>

      <CardActions >

      {/* <button  onClick={()=>ctx.handelclick(ele)} className='bg-slate-500 text-black  py-2  rounded-md
       hover:bg-gray-300' size="small">
       View Details</button> */}
   <button onClick={()=>ctx.addItem(ele)} className='bg-slate-300 text-black px-4 py-2 rounded-md
    hover:bg-slate-500'>Add to Cart</button>
      </CardActions>
    </Card>
    })
  }
    </div>

 <nav aria-label="Page navigation example" className=' w-max mx-auto my-4'>
<ul className="flex flex-wrap  text-wrap -space-x-px text-sm">

  <li onClick={handelPrevious}>
    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
  </li>
  
  {
    btnArr.map((nums)=>{
      return  <li onClick={()=>handelNums(nums)}>
      <a href="#" className= {nums===currentPage ? 'flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-blue-700 dark:hover:text-white' :
         'flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white'}>{nums}</a>
    </li>
    })
  }

  <li onClick={handelNext}>
    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
  </li>
</ul>
</nav>


  </div>
    }
  
  </div>
  )
}
export default Home
