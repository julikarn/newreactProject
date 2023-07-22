import React from 'react'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { showUser } from '../redux/userDetail';
import { Link, useNavigate } from "react-router-dom";


const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [id, setId] = useState()
    const { users, loading, searchDatas } = useSelector((state) => state.app)
    const [value, setValue] = useState('')
    // onsubmit
    const [searchData, setSearchData]=useState('')
    const [onSubmit, setOnsubmit] = useState('')

    // const onChange = (event) => {
    //     setValue(event.target.value)
    // }
    const onSearch = (e) => {

        e.preventDefault()
       
        setOnsubmit(searchData)

        console.log(value);


    }
    useEffect(() => {

        dispatch(showUser())

    }, []);
    if (loading) {
        return <h2>Loading</h2>;
    }
    return (
        <div>
            <nav className="navbar bg-primary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand">Navbar</a>
                    <form className="d-flex" role="search" onSubmit={onSearch}>
                        <input className="form-control me-2" type="text" placeholder=" Type to search" aria-label="Search" value={searchData} onChange={(e) =>setSearchData(e.target.value)} />
                        <button className="btn btn-outline-success" type='submit'>Search</button>

                    </form>
                </div>
            </nav>
            {/* <div className='dropdown'>
                {
                    users.length > 0 && users.filter(item => {
                        const searchTerm = value.toLowerCase();
                        const fullName = item.title.toLowerCase();
                        return searchTerm && fullName.startsWith(searchTerm) && fullName !== searchTerm;
                    })
                    .map((index) => (
                        <div onClick={() =>onSearch(index.title)}>
                            {index.title}
                        </div>
                    ))
                }

            </div> */}
            <h1 className='container'>Online Store</h1>
            <p>All the products of online store :</p>
            <div>

                {
                    users.length > 0 && users
                    .filter(item => {
                        const searchTerm = onSubmit.toLowerCase();
                        const fullName = item.title.toLowerCase();
                        if(searchTerm.length === 0){
                            return item
                        }
                        else{

                            return searchTerm && fullName.startsWith(searchTerm) && fullName !== searchTerm;

                        }
                       
                    })
                    // .filter((ele)=>{
                    //     if(searchDatas.length === 0){
                    //         return ele
                    //     }
                    //     else{
                    //         return ele.title.toLowerCase().includes(searchDatas.toLowerCase())
                    //     }
                    // })
                    .map((index, key) => {

                        return <div>

                            <div className="card w-50 mx-auto" key={key}>

                                <img src={index.image} className="card-img-top" alt="..." onClick={() => navigate(`/viewPost/${index.id}`)} />
                                <div className="card-body">
                                    <h5 className="card-title">{index.title}</h5>
                                    <h3>{index.price}</h3>

                                </div>
                            </div>

                        </div>

                    })


                }

            </div>

        </div>
    )
}

export default Home
