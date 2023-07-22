import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { showUser } from '../redux/userDetail';
const View = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const a = +id;
  const users = useSelector((state) => state.app.users)
  const singleUser = users.filter(f => f.id === a)
  

 

  useEffect(() => {

    dispatch(showUser())

    

  }, []);





  return (


    <div>
      <h1>Product Description</h1>

      {
        singleUser && singleUser.map((index, key) => {

          return <div>
            <div className="card w-50 mx-auto" key={key}>

              <img src={index.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{index.title}</h5>
                <h3>{index.price}</h3>
                <h5>{index.category}</h5>
                 <p>{index.description}</p>

                


              </div>
            </div>
          </div>

        })
      }

    </div>
  )
}

export default View
