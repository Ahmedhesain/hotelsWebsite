
import React, { useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from "react-bootstrap/Button";

import { removeFromFavorites } from '../../store/actions/action';
import { Link } from 'react-router-dom';
import { IdContext } from '../../context/contextId';

function Favorites() {
  const favorites = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();
  var {setIdValue}=useContext(IdContext)


  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      dispatch({ type: 'SET_FAVORITES', payload: JSON.parse(storedFavorites) });
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleRemoveFromFavorites = (movieId) => {
    dispatch(removeFromFavorites(movieId));
  };

  if (!favorites) {
    return null; 
  }

  return (
<div class="row col-12 ">
        {favorites.map((hotel) => (
              <div class="container-fluid col-lg-5 col-md-6 col-sm-12  offset-lg-1 offset-md-0 mb-sm-3 me-lg-0 mb-3" >

                <div class="card "key={hotel.id}  style={{boxShadow: "4px 4px 4px 4px #888888"}} >
                         <div class="row g-0">
                          <div class="col-md-4 col-sm-4 col-lg-4 ">
                            <img src={hotel.data.img1} class="img-fluid rounded-start h-100" alt="..."/>
                         </div>
                           <div class="col-md-8 col-sm-8 col-lg-8 ">
                           <div class="card-body">
                              <div class="d-flex justify-content-between">
                                <h5 class="card-title fw-bold" style={{fontSize: "medium"}}>{hotel.data.name}</h5>
                               
                  <Button
                    variant="btn btn-outline-danger ms-2"
                     onClick={() => handleRemoveFromFavorites(hotel.id)}
                  >
                  Remove 
                   </Button>
                   <Button
                    variant="btn btn-outline-success ms-2"
                     onClick={() => setIdValue(hotel.id)}
                  >
                   <Link to='/details' style={{textDecoration: "none" ,color: "green"}}>Details</Link> 
                   </Button>
                               </div>
                               <div class="d-flex align-items-center">
                                <div class="ratings" >
                                <i class="fa fa-star rating-color" style={{fontSize:" small"}}></i>
                                  <i class="fa fa-star rating-color" style={{fontSize:" small"}}></i>
                                   <i class="fa fa-star rating-color" style={{fontSize:" small"}}></i>
                                   <i class="fa fa-star rating-color" style={{fontSize:" small"}}></i>
                                 <i class="fa fa-star rating-color" style={{fontSize:" small"}}></i>
                               </div>
                               <p class="review-count " style={{color: "darkgray "}}>{hotel.data.city}</p>
                             </div>
                            
                               <p class="card-text" style={{fontSize: "small"}}>{hotel.data.address}</p>
                               <p class="card-text" style={{fontWeight: "400", fontSize: "small"}}>{hotel.data.evaluation} Excellent<small class="text-body-secondary">(12 Reviews)</small></p>
                             </div>
                        </div>
                         </div>
                         </div>
                      </div>
          
        ))}
      </div>
  );
}

export default Favorites;
