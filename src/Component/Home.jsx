import React from 'react'


const Home = () => {
  return <div className="home">
   <div className="home-content">
   <div className="left-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p className='add'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className="selectors">
          <button className='shop-now'>Shop Now</button>
          <button className="category">Category</button>
        </div>
        
        <div className="online-shop">
        <p>Also Available On</p>
        <div className="online-img">
        <img src="./Images/Flipkart.png" alt="Flipkart" className='flipkart' />
        <img src="./Images/Amazon.png" alt="Amazon" className='amazon' />
        </div>
        </div>
    </div>
    <div className="right-content">
            <img src="./Images/shoe.png" alt="shoe" className='shoe' />
    </div>
   </div>
  </div>
  
}

export default Home
