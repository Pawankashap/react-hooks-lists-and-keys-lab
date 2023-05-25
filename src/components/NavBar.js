import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  
  const objlink= links.map((link, index)=> {
    const obj=`#${link}`
    return <a key={index} href={obj}>{link}</a>
  } )
  return <nav>{objlink}</nav>;
}

export default NavBar;
