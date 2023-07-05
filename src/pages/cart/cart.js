
import React, { useContext, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from "react-bootstrap/Button";
import { removeFromFavorites } from '../../store/actions/action';
import { Link } from 'react-router-dom';
import { IdContext } from '../../context/contextId';
import i18n from '../../i18n';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../results/firebase';
import { doc, deleteDoc } from 'firebase/firestore'
import { Rating } from 'react-simple-star-rating';



function Cart() {
  const favorites = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();
  var {setIdValue}=useContext(IdContext)
  const[allresults,setAllRes]=useState([]);
  const [rating, setRating] = useState(0) // initial rating value


  function getAllData(){
    const q = query(collection(db, "orders"), where("userName", "==", "ahmed hesain"));
    getDocs(q).then(res=>{
     const result =res.docs.map(doc=>({
      data:doc.data(),
      id:doc.id
     }))
     setAllRes(result);
     console.log(result)
    }).catch(err=>{console.log(err);});
  }
  function  rateFunc ( id) {
    const docRef = db.collection("orders").doc(id);
 
    // Update the timestamp field with the value from the server
    const res =  docRef.update({
     rate:rating
    });
   
  }
  const handleRating = (rate,id) => {
    setRating(rate)
    // rateFunc(id);
    db.collection("orders").doc("id").update({
     
        rate: rating
      
    }).then(function() {
      console.log("Frank food updated");
    });
  }
  useEffect(() => {
    getAllData()
  }, []);
  useEffect(() => {
    getAllData()
  }, [allresults]);
  const handleRemoveFromCart = async  (hotelId) => {
    
      const reference = doc(db, 'orders', hotelId)
      await deleteDoc(reference)
  
  };


  return (
<div class="row col-12 ">
        {allresults.map((hotel) => (
              <div class="container-fluid col-lg-5 col-md-6 col-sm-12  offset-lg-1 offset-md-0 mb-sm-3 me-lg-0 mb-3" >

                <div class="card "key={hotel.id}  style={{boxShadow: "4px 4px 4px 4px #888888"}} >
                         <div class="row g-0">
                          <div class="col-md-4 col-sm-4 col-lg-4 ">
                            <img src={hotel.data.img1} class="img-fluid rounded-start h-100" alt="..."/>
                         </div>
                           <div class="col-md-8 col-sm-8 col-lg-8 ">
                           <div class="card-body">
                              <div class="d-flex justify-content-between">
                                <h5 class="card-title fw-bold" style={{fontSize: "medium"}}>{i18n.language==="en"?`${hotel.data.roomName}`:`${hotel.data.nameAR}`}</h5>
                               
                  <Button
                    variant="btn btn-outline-danger ms-2"
                     onClick={() => handleRemoveFromCart(hotel.id)}
                  >
                  {i18n.language==="en"?"Remove":"إزالة"} 
                   </Button>
                   {/* <Button
                    variant="btn btn-outline-success ms-2"
                     onClick={() => setIdValue(hotel.id)}
                  >
                   <Link to='/details' style={{textDecoration: "none" ,color: "green"}}>{i18n.language==="en"?"Details":"تفاصيل"}</Link> 
                   </Button> */}
                               </div>
                               <div class="d-flex align-items-center">
                                <div class="ratings" >
                                <i class="fa fa-star rating-color" style={{fontSize:" small"}}></i>
                                  <i class="fa fa-star rating-color" style={{fontSize:" small"}}></i>
                                   <i class="fa fa-star rating-color" style={{fontSize:" small"}}></i>
                                   <i class="fa fa-star rating-color" style={{fontSize:" small"}}></i>
                                 <i class="fa fa-star rating-color" style={{fontSize:" small"}}></i>
                               </div>
                               <p class="review-count " style={{color: "darkgray "}}>{i18n.language==="en"?`${hotel.data.city}`:`${hotel.data.cityAR}`}</p>
                             </div>
                            
                               <p class="card-text" style={{fontSize: "small"}}>{i18n.language==="en"?`${hotel.data.address}`:`${hotel.data.addressAR}`}</p>
                               <p class="card-text" style={{fontWeight: "400", fontSize: "small"}}>{hotel.data.evaluation} {i18n.language==="en"?"Excellent":"ممتاز"}<small class="text-body-secondary">(12 Reviews)</small></p>
                             </div>
                             <div className='App'>
                             <div>
                               Rate Your Visit</div>
      <Rating
        onClick={handleRating}
        ratingValue={rating}
        size={20}
        label
        transition
        fillColor='orange'
        emptyColor='gray'
        className='foo' // Will remove the inline style if applied
      />
      {/* Use rating value */}
      <div>
      {rating} Stars
      </div>
    </div>
                        </div>
                         </div>
                         </div>
                      </div>
          
        ))}
      </div>
  );
}

export default Cart;
