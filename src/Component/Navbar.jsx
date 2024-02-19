import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
       <img src="https://s3-alpha-sig.figma.com/img/4517/5a94/d5389cc06b9d40c646878c60ac4bf7ed?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=apucEqWizdOcteQd~FAMZ9Hc0SO87HLeqyjIVfPloDpEjZEFpLxFiUSzg4Ch4yguLxibH8W-2R0nAUjfi1jaF-S5wgTjduoKSUr~8tta6C4nyaz4EJ~kIA5KPqbuTaEvIp4J2UMtDakx5eo9SJ9S-hIn1eJzHJASs4F6S1~BIUuP1uDCR2jYVCI7xAsvaYcwl1E0g0-tZEjMCZg18~vPX1XkwEEYcwnFGLjPPmHxYTmCsyyji3I9k47b1ABaXVzmqX1bCmPDBxAnIHzfdCv7zq-88LrS-NKwoRqOPuRGv4A6OEEITzlXtuy1pRRJ3IQMB5KNgulPebsNT4Ib9V0Uiw" alt="Nike" className="logo"/>
       <ul>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Location</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
       </ul>
       <button>Login</button>
     
    </div>
  )
}

export default Navbar
