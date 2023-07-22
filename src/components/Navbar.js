import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchUser } from "../redux/userDetail";

const Navbar = () => {
    const dispatch = useDispatch();

  const [searchData, setSearchData] = useState("");
  const { searchDatas } = useSelector((state) => state.app)
  
 
  useEffect(()=>{
    dispatch(searchUser(searchData));
    
  },[searchData])

  const onSearch = (e)=>{
    e.preventDefault()

    
    

  }
  return (
    <div>
        <nav className="navbar bg-primary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand">Navbar</a>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="text" placeholder=" Type to search" aria-label="Search" value={searchData} onChange={(e) =>setSearchData(e.target.value)} />
                        <button className="btn btn-outline-success" onClick={onSearch}>Search</button>

                    </form>
                </div>
            </nav>
    </div>
  )
}

export default Navbar
