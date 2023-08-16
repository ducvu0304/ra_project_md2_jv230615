import React from 'react'
import Searchbox from "./components/Searchbox";
import Logo from "./components/Logo";
import UserBox from "./components/UserBox";

const Top = ()  => {
  return (
    <div className="container flex items-center justify-between">
        <Logo />
        <Searchbox />
        <UserBox />
    </div>
  )
}
export default Top;