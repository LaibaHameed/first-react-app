import React from 'react';
import Link from 'next/link';

const Header = () => {

  return (
    <>
    <nav> 
     <h3>logo</h3>
      <Link id='link' href='/Courses'>Courses</Link>
      <Link id='link' href='/About'> About us</Link>
      <Link id='link' href='/Contact'> Contact us</Link>
      <Link id='link' href='/Account'> login</Link>
      </nav>
    </>
  )
}

export default Header
