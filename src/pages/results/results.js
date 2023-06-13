import React ,{useState,useEffect,useContext} from 'react';
import { collection ,getDocs} from 'firebase/firestore';
import { db } from './firebase';

import { SearchContext } from '../../context/context';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../store/actions/action';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { IdContext } from '../../context/contextId';
import Carousel from "react-bootstrap/Carousel";
import { PersonsContext } from '../../context/personsContext';
import { CheckinContext } from '../../context/checkinContext';
import { CheckoutContext } from '../../context/checkoutContext copy';
import LoadingSpinner from './loading';


function Results() {
    const[results,setRes]=useState([]);
    var {searchValue,setSearchValue}=useContext(SearchContext)
    var {idValue,setIdValue}=useContext(IdContext)
    var {personsValue,setPersonsValue}=useContext(PersonsContext);
    var {checkinValue,setCheckinValue}=useContext(CheckinContext);
    var {checkoutValue,setCheckoutValue}=useContext(CheckoutContext);
    const favorites = useSelector((state) => state.favorites.favorites);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

  //   var {languageValue,setLanguageValue}=useContext(LanguageContext);
  const isFavorite = (movie) => {
    if (Array.isArray(favorites)) {
        return favorites.some((favMovie) => favMovie.id === movie.id);
    }
    };
  
    const handleAddToFavorites = (movie) => {
      if (isFavorite(movie)) {
        dispatch(removeFromFavorites(movie.id));
      } else {
        dispatch(addToFavorites(movie));
      }
    };
  useEffect(() =>{
    getData()

  },[]);
  useEffect(() =>{
   

  },[dispatch,idValue,searchValue]);

  function getData(){
    const resultsCollection=collection(db,searchValue);
    getDocs(resultsCollection).then(res=>{
      setLoading(true);
     const result =res.docs.map(doc=>({
      data:doc.data(),
      id:doc.id
     }))
     setRes(result);
     setLoading(false);
    }).catch(err=>{console.log(err);});
  }
  return (
    loading?<div style={{width:"100%",height:"400px",paddingLeft:"45%"}}><LoadingSpinner /></div>: <div className='bg-light'>
     <div className="container pt-3 ">
     <div class="row col-12 d-flex pt-3 align-items-center p-2 m-1"  style={{boxShadow:" 2px 2px 2px 2px #888888"}}>
            <div class="col-lg-3 col-md-3 col-sm-12 col-12 mb-1" >
              <div class="input-group ">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="23" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
</svg>
                  </div>
                </div>
                <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Search"
                value={searchValue}
                onChange={(e)=>{setSearchValue(e.target.value); console.log(searchValue)}}/>
              </div>
            </div>
            
            <div class="col-sm col-lg-2 col-md-2 col-sm-6 col-6 mb-1">
              <div class="input-group">
                <label for="checkIn" class="input-group-text">in</label>
                <input type="date" class="form-control" id="checkIn"
                  value={checkinValue}
                  onChange={(e)=>{setCheckinValue(e.target.value); console.log(checkinValue)}}/>
              </div>
            </div>
      
            <div class="col-sm col-lg-2 col-md-2 col-sm-6 col-6 mb-1">
              <div class="input-group">
                  <label for="checkOut" class="input-group-text">out</label>
                  <input type="date" class="form-control" id="checkOut" value={checkoutValue}
                  onChange={(e)=>{setCheckoutValue(e.target.value); console.log(checkoutValue)}}/>
                </div>
            </div>
            
            <div class="col-sm col-lg-4 col-md-4 col-sm-5 col-4   mb-1 rounded " >
              <div class="input-group">
                  <label for="checkOut" class="input-group-text">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                  </svg>
                </label>
                  <div class="nav-item dropdown  ">
                  <input type="number" className="form-control" id="inlineFormInputGroup" placeholder="2 Persons"
                  value={personsValue}
                  onChange={(e)=>{setPersonsValue(e.target.value); console.log(personsValue)}}
               />
                  </div>        
                  </div>
            </div>
          
           
            <button onClick={()=>{ getData()}} type="button" class="btn btn-primary search-b col-lg-1 col-md-1 col-sm-6 col-6 mb-2 ms-lg-0 ms-md-0 ms-sm-2 align-items-center ms-5 col-6"   >
            Search
              </button>
            
          
          </div>
       
          
        
        </div>
    
        <div className='container-fluid col-lg-10 col-md-12 col-sm-12  offset-lg-1 offset-md-0 pt-4'>
     
        { results.map(result => <div class="card m-2 " >
      <div class="row g-0" >
        <div class="col-md-3 col-sm-3 col-lg-3 col-12  " >
        <Carousel  >
                <Carousel.Item >
                  <img style={{height:"240px"}}
                    className="d-block w-100"
                    src={result.data.img2}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img style={{height:"240px"}}
                    className="d-block w-100"
                    src={result.data.img1}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img style={{height:"240px"}}
                    className="d-block w-100" 
                    src={result.data.img3}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>        </div>
        <div class="col-md-4 col-sm-4 col-lg-5 ">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <h5 class="card-title fw-bold" style={{fontSize: "medium"}}>{result.data.name}</h5>
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
              </svg> */}
               <Link onClick={() => handleAddToFavorites(result)}>
                    {isFavorite(result) ? (
                      <AiFillHeart size={24} color="red" className="filled" />
                    ) : (
                      <AiOutlineHeart
                        size={24}
                        color="red"
                        className="bordered"
                      />
                    )}
                  </Link>
            </div>
            <div class="d-flex align-items-center">
              <div class="ratings" >
                  <i class="fa fa-star rating-color" style={{fontSize:" small"}}></i>
                  <i class="fa fa-star rating-color" style={{fontSize:" small"}}></i>
                  <i class="fa fa-star rating-color" style={{fontSize:" small"}}></i>
                  <i class="fa fa-star rating-color" style={{fontSize:" small"}}></i>
                  <i class="fa fa-star rating-color" style={{fontSize:" small"}}></i>

              </div>
              <p class="review-count " style={{color: "darkgray"}}>{result.data.city}</p>
          </div>
          
            <p class="card-text" style={{fontSize: "small"}}>{result.data.distance} km from city center</p>
            <p class="card-text" style={{fontWeight: "400", fontSize:" small"}}>{result.data.evaluation} Excellent<small class="text-body-secondary">(12 Reviews)</small></p>
          </div>
        </div>
        <div class="col-md-5 col-sm-5 col-lg-4">
          <div class="card text-right let1 m-1 p-0 " style={{ backgroundColor: "#f1f8ea"}}>
            <div class="card-body " style={{padding: "7px"}}>
              <p class="card-title mb-4 fw-bold">Expedia</p>
              <div class=" d-flex">2 nights for<p class="  d-inline-block" style={{color:" #7B1FA2"}} >{result.data.price}$</p> </div>
              <div class="d-flex justify-content-between fw-bold mb-md-0">
                <p class="card-text mt-4" style={{color: "#7B1FA2"}}>{result.data.price}$</p>
                <button onClick={()=>{setIdValue(result.id); console.log(idValue)}}  class="btn btn-success d-inline-block fw-bold" style={{height: "37px",width: "auto",backgroundColor:"#7B1FA2" ,fontSize: "small",textAlign: "center"}}>
                <Link to='/details' style={{textDecoration: "none" ,color: "white"}}>view Deal&nbsp;
                     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg></Link>
                    
                </button>

              </div>
            </div>
          </div>
          <div class="d-flex ">
            <div class=" d-inline-block bg-body-primary m-1 " style={{lineHeight:"8px"}} >
              <div class="card-body "style={{paddingTop: "10px",paddingLeft:"3px", backgroundColor:"#f9fafa",  borderRaduis: "3px"}} >
                <p class="card-title fw-bold" style={{fontSize: "small"}}>Hotels.com</p>
                <p class="card-text fw-bold " style={{color: "#7B1FA2"}}>{result.data.price}$</p>
                
            </div>
            </div>
            <div class=" d-inline-block bg-body-primary m-1 w-75"style={{lineHeight: "8px"}} >
              <div class="card-body"style={{paddingTop: "10px",paddingLeft:"3px",backgroundColor:"#f9fafa",  borderRadius: "3px"}} >
                <p class="card-title fw-bold" style={{fontSize: "small"}}>Our Latest Price</p>
                <p class="card-text fw-bold " style={{color: "#7B1FA2"}}>{result.data.price}$</p>
                
            </div>
            </div>
          </div>
          
        </div>
      </div>
    </div> )}
        </div>

 </div>
  );
}

export default Results;
