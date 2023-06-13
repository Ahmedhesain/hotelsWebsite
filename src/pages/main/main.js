import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import one from '../../../src/images/1.jpg'
import two from '../../../src/images/2.jpg'
import three from '../../../src/images/3.jpg'
import four from '../../../src/images/4.jpg'
import five from '../../../src/images/5.jpg'
import { SearchContext } from '../../context/context';

import { PersonsContext } from '../../context/personsContext';
import { CheckinContext } from '../../context/checkinContext';
import { CheckoutContext } from '../../context/checkoutContext copy';


function Main() {
  var {searchValue,setSearchValue}=useContext(SearchContext);
  var {personsValue,setPersonsValue}=useContext(PersonsContext);
  var {checkinValue,setCheckinValue}=useContext(CheckinContext);
  var {checkoutValue,setCheckoutValue}=useContext(CheckoutContext);

  return (
 <div>
    <div style={{height:"1px" ,opacity:"30%"}} className='w-100 bg-secondary'></div>
     <div class="container">
          
          <div class="row">
            <h2 class="m-2"> <span class="text-primary">Where</span> to?</h2>
            <p class="m-2">Try searching for a city, a specific hotel, or even a landmark!</p>
          </div>
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
          
           
            <button type="button" class="btn btn-primary search-b col-lg-1 col-md-1 col-sm-6 col-6 mb-2 ms-lg-0 ms-md-0 ms-sm-2 align-items-center ms-5 col-6"   >
             <Link to='/results' style={{textDecoration: "none" ,color: "white"}}>Search</Link>
              </button>
            
          
          </div>
          <div style={{height:"1px" ,opacity:"30%"}} className='w-100 bg-secondary mt-4'></div>
          <div class="card m-2 " >
      <div class="row g-0 ">
        <div class="col-md-5 col-sm-5 col-lg-5 ">
          <img src={one} class="img-fluid  h-100" alt="..."/>
        </div>
        <div class="col-md-7 col-sm-7 col-lg-7 ">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <h3 class="card-title fw-bold" >
Enjoy the same savings of 20% in the app, and also:</h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="116" height="116" fill="currentColor" class="bi bi-qr-code" viewBox="0 0 16 16">
  <path d="M2 2h2v2H2V2Z"/>
  <path d="M6 0v6H0V0h6ZM5 1H1v4h4V1ZM4 12H2v2h2v-2Z"/>
  <path d="M6 10v6H0v-6h6Zm-5 1v4h4v-4H1Zm11-9h2v2h-2V2Z"/>
  <path d="M10 0v6h6V0h-6Zm5 1v4h-4V1h4ZM8 1V0h1v2H8v2H7V1h1Zm0 5V4h1v2H8ZM6 8V7h1V6h1v2h1V7h5v1h-4v1H7V8H6Zm0 0v1H2V8H1v1H0V7h3v1h3Zm10 1h-1V7h1v2Zm-1 0h-1v2h2v-1h-1V9Zm-4 0h2v1h-1v1h-1V9Zm2 3v-1h-1v1h-1v1H9v1h3v-2h1Zm0 0h3v1h-2v1h-1v-2Zm-4-1v1h1v-2H7v1h2Z"/>
  <path d="M7 12h1v3h4v1H7v-4Zm9 2v2h-3v-1h2v-1h1Z"/>
</svg>
            </div>
            
          
            <p class="card-text" style={{fontSize: "small"}}>Get notifications about your stay</p>
            <p class="card-text" style={{fontSize: "small"}}>Book anytime, anywhere at the last minute</p>
            <p class="card-text" style={{fontSize: "small"}}>Easily manage your stay on the go</p>
            <p class="card-text" style={{fontSize: "large", fontWeight:"bold"}}>Scan the QR code with your device camera and download our app</p>

          </div>
        </div>
   
      </div>
           </div>
          
          <div class="row">

          <div className="row">
            <h2 className="m-2"> <span className="text-primary">Pick up where you left off</span> </h2>
            <p className="m-2">No Resrervations Yet!!!</p>
          </div>
          <div className="row">
          <h3 className="m-2 pt-4 pb-4"> <span style={{fontWeight:"700"}} >Hotels.com makes it easy and rewarding. Always</span> </h3>

            <div className="row col-12 ">
            <div className="container-fluid d-flex  col-lg-3 col-md-3 col-sm-12 col-xs-1  offset-1 offset-lg-1 offset-md-0 mb-sm-3 me-lg-0 mb-3" >
     
            <div className='m-3'><img style={{width:50 , height:50}} src="https://a.travel-assets.com/egds/marks/loyalty_hotels.svg" alt="" /> </div>
            <div><h6>Reward yourself your way</h6>
            <p>Stay where you want, when you want, and get rewarded</p>
            <a href="#">Learn about Hotels.com Rewards</a>
            </div>

   
          </div>
           <div className="container-fluid d-flex col-lg-3 col-md-3 col-sm-12 col-xs-1  offset-1 offset-lg-1 offset-md-0 mb-sm-3 me-lg-0 mb-3" >
           <div className='m-3'><img style={{width:50 , height:50}} src="https://a.travel-assets.com/egds/marks/brands/hotels/mod.svg" alt="" /> </div>
            <div><h6>Unlock instant savings</h6>
            <p>Save an average of 15% on thousands of hotels with Member Prices</p>
            <a href="#">Sign up, it's free</a> <a href="#" className='ms-3'>Sign in</a>
            </div>

   
          </div>
          <div className="container-fluid d-flex col-lg-3 col-md-3 col-sm-12 col-xs-1  offset-1 offset-lg-1 offset-md-0 mb-sm-3 me-lg-0 mb-3" >
     
          <div className='m-3'><img style={{width:50 , height:50}} src="https://a.travel-assets.com/egds/marks/loyalty_hotels.svg" alt="" /> </div>
            <div><h6>Free cancellation</h6>
            <p>Flexible bookings on most hotels*</p>
            
            </div>

   
          </div>
     </div> 
          </div>
          </div>
          <div >
            <h3 class="m-2"> <span style={{fontWeight:"700"}} >We do more than just hotels...</span> </h3>
            <div className='row col-12'>
            <div class="card p-0 text-white container-fluid col-lg-2 col-md-4 col-sm-5 col-6 col-xs-1  offset-1 offset-lg-0 ms-lg-2 ms-md-2 offset-md-0 mb-sm-3 me-lg-0 mb-3">
             <img class="card-img w-100" src={two} alt="Card image" />
            <div class="card-img-overlay">
            <h5 class="card-title text-bottom "style={{paddingTop:"40%"}}>Appertemnt</h5>
   
             </div>
           </div>
           <div class="card p-0 text-white container-fluid col-lg-2 col-md-4 col-sm-5 col-6 col-xs-1  offset-1 offset-lg-0 ms-lg-2 ms-md-2 offset-md-0 mb-sm-3 me-lg-0 mb-3">
             <img class="card-img w-100" src={three} alt="Card image" />
            <div class="card-img-overlay">
            <h5 class="card-title text-bottom "style={{paddingTop:"40%"}}>Cottages</h5>
   
             </div>
           </div>
           <div class="card p-0 text-white container-fluid col-lg-2 col-md-4 col-sm-5 col-6 col-xs-1  offset-1 offset-lg-0 ms-lg-2 ms-md-2 offset-md-0 mb-sm-3 me-lg-0 mb-3">
             <img class="card-img w-100" src={four} alt="Card image" />
            <div class="card-img-overlay">
            <h5 class="card-title text-bottom "style={{paddingTop:"40%"}}>Villas</h5>
   
             </div>
           </div>
           <div class="card p-0 text-white container-fluid col-lg-2 col-md-4 col-sm-5 col-6 col-xs-1  offset-1 offset-lg-0 ms-lg-2 ms-md-2 offset-md-0 mb-sm-3 me-lg-0 mb-3">
             <img class="card-img w-100" src={five} alt="Card image" />
            <div class="card-img-overlay">
            <h5 class="card-title text-bottom "style={{paddingTop:"40%"}}>Motels</h5>
   
             </div>
           </div>
            </div>
          </div>
        
          
        
        </div>
 </div>
  );
}

export default Main;
