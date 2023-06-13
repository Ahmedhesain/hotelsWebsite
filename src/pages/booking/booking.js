import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Carousel from "react-bootstrap/Carousel";
import { IdContext } from "../../context/contextId";
import {  getDoc,doc, collection, addDoc} from 'firebase/firestore';
import { db } from "../results/firebase";
import { SearchContext } from "../../context/context";
import { PersonsContext } from "../../context/personsContext";
import { CheckinContext } from "../../context/checkinContext";
import { CheckoutContext } from "../../context/checkoutContext copy";
import {  useNavigate } from "react-router-dom";

export default function Booking() {
  const navigate = useNavigate();
    var {idValue}=useContext(IdContext);
    var {personsValue}=useContext(PersonsContext);
    var {checkinValue}=useContext(CheckinContext);
    var {checkoutValue}=useContext(CheckoutContext);
    const[results,setRes]=useState({});
    const [userBooking,setUserBooking] = useState({
      userFirstName: "",
      userLastName : "",
      userEmail : "",
      userPhone : "",
    });
    const [errors,setErrors] = useState({
      userFirstNameErr :"",
      userLastNameErr :"",
      userEmailErr :"",
      userPhoneErr :"",
    })

    var {searchValue}=useContext(SearchContext);
    function handleSubmit(evt){
      
      evt.preventDefault();
        const collRef=collection(db,"orders")
        if(errors.userFirstNameErr===""&&errors.userLastNameErr===""&&errors.userEmailErr===""&&errors.userPhoneErr===""){
        addDoc(collRef,{roomName:results.name,roomId:idValue,persons:personsValue,firstName:userBooking.userFirstName,lastName:userBooking.userLastName,email:userBooking.userEmail,phone:userBooking.userPhone,checkIn:checkinValue,checkOut:checkoutValue})
      
      navigate("/");

      }
    }
    useEffect(() =>{
        getData()
    
      },[]);
    
    
      async function  getData(){
        const resultItem=doc(db,searchValue,idValue);
         const  docSnap=await getDoc(resultItem);
        console.log(docSnap.data())
        setRes(docSnap.data())
      }
      const handleChange = (evt)=>{

        if(evt.target.name === "firstName"){
          setUserBooking({...userBooking,userFirstName:evt.target.value});
          setErrors({...errors,userFirstNameErr:(evt.target.value.length===0)?"First name required":""});
        } if(evt.target.name === "lastName"){
          setUserBooking({...userBooking,userLastName:evt.target.value});
          setErrors({...errors,userLastNameErr:(evt.target.value.length===0)?"last name required":""});
        } if(evt.target.name === "email"){
          setUserBooking({...userBooking,userEmail:evt.target.value});
          setErrors({...errors,userEmailErr:(evt.target.value.length===0)?"user Email required":""});
        }if(evt.target.name === "phoneNumber"){
          setUserBooking({...userBooking,userPhone:evt.target.value});
          setErrors({...errors,userPhoneErr:(evt.target.value.length===0)?"phone required":""});
        }

      }
  return (
    <div class="container-fluid px-4  bg-secondary-subtle">
      <div class="row gx-1">
        <div class="col-8 ">
          <div class="p-3">
            <div class="container ">
              <div class="row row-cols-1 gy-2 ">
                {/* 1 */}
                <div class="col bg-light   p-0 mt-0 border border-black">
                  <Nav.Link href="#home">
                    <div class="container px-3">
                      <div class="row gx-5">
                        <div class="col-1">
                          <div class="p-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="30"
                              viewBox="0 -960 960 960"
                              width="30"
                            >
                              <path d="M489-120v-60h291v-600H489v-60h291q24 0 42 18t18 42v600q0 24-18 42t-42 18H489Zm-78-185-43-43 102-102H120v-60h348L366-612l43-43 176 176-174 174Z" />
                            </svg>
                          </div>
                        </div>
                        <div class="col-10">
                          <div class="p-3">
                            Sign in to book faster and collect 1 stamp with this
                            stay.
                          </div>
                        </div>
                        <div class="col-1">
                          <div class="p-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="30"
                              viewBox="0 -960 960 960"
                              width="30"
                            >
                              <path d="m375-240-43-43 198-198-198-198 43-43 241 241-241 241Z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Nav.Link>
                </div>
                {/* 2 */}
                <div class="col bg-light  border border-black">
                  <div class="container border-bottom border-black">
                    <div class="row align-items-start">
                      <div class="col-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="30"
                          viewBox="0 -960 960 960"
                          width="30"
                        >
                          <path d="M222-255q63-44 125-67.5T480-346q71 0 133.5 23.5T739-255q44-54 62.5-109T820-480q0-145-97.5-242.5T480-820q-145 0-242.5 97.5T140-480q0 61 19 116t63 109Zm257.814-195Q422-450 382.5-489.686q-39.5-39.686-39.5-97.5t39.686-97.314q39.686-39.5 97.5-39.5t97.314 39.686q39.5 39.686 39.5 97.5T577.314-489.5q-39.686 39.5-97.5 39.5Zm.654 370Q398-80 325-111.5q-73-31.5-127.5-86t-86-127.266Q80-397.532 80-480.266T111.5-635.5q31.5-72.5 86-127t127.266-86q72.766-31.5 155.5-31.5T635.5-848.5q72.5 31.5 127 86t86 127.032q31.5 72.532 31.5 155T848.5-325q-31.5 73-86 127.5t-127.032 86q-72.532 31.5-155 31.5ZM480-140q55 0 107.5-16T691-212q-51-36-104-55t-107-19q-54 0-107 19t-104 55q51 40 103.5 56T480-140Zm0-370q34 0 55.5-21.5T557-587q0-34-21.5-55.5T480-664q-34 0-55.5 21.5T403-587q0 34 21.5 55.5T480-510Zm0-77Zm0 374Z" />
                        </svg>
                      </div>
                      <div class="col-11 fw-bold fs-4">
                        step 1: Your details
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <form onSubmit={(e)=>{handleSubmit(e)}}>
                    <div class="mb-3">
                      <label for="firstName" class="form-label">
                        First Name
                      </label>
                      <div id="emailHelp" class="form-text">
                        Please give us the name of one of the people staying in
                        this room.
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        id="firstName"
                        placeholder="First Name"
                        value={userBooking.userFirstName}
                        name="firstName"
                        onChange={(e)=>{handleChange(e)}}
                      />
                      <p className="text-danger">{errors.userFirstNameErr}</p>
                    </div>
                    <div class="mb-3">
                      <label for="lastName" class="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="lastName"
                        placeholder="Last Name"
                        value={userBooking.userLastName}
                        name="lastName"
                        onChange={(e)=>{handleChange(e)}}
                      />
                      <p className="text-danger">{errors.userLastNameErr}</p>
                    </div>
                    <div class="mb-3">
                      <label for="email" class="form-label">
                        Email address
                      </label>
                      <div id="emailHelp" class="form-text">
                        Your confirmation email goes here
                      </div>
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Email address"
                        value={userBooking.userEmail}
                        name="email"
                        onChange={(e)=>{handleChange(e)}}
                      />
                      <p className="text-danger">{errors.userEmailErr}</p>
                      <div id="emailHelp" class="form-text">
                        We'll never share your email with anyone else.
                      </div>
                    </div>
                    <div class="mb-3">
                      <label for="phoneNumber" class="form-label">
                        Phone Number
                      </label>
                      <div id="emailHelp" class="form-text">
                        We will only contact you in an emergency
                      </div>
                      <input
                        type="tel"
                        class="form-control"
                        id="phoneNumber"
                        placeholder="Phone Number"
                        value={userBooking.userPhone}
                        name="phoneNumber"
                        onChange={(e)=>{handleChange(e)}}
                      />
                      <p className="text-danger">{errors.userPhoneErr}</p>
                    </div>
                    <div class="mb-3 form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="exampleCheck1"
                      />
                      <label class="form-check-label" for="exampleCheck1">
                        Check this box if you would not like to receive
                        Hotels.com special deals email newsletter that contains
                        great hotel promotions.
                      </label>
                    </div>
                    <button className="btn btn-primary" type="submit" disabled={(userBooking.userEmail===""||userBooking.userFirstName===""||userBooking.userLastName===""||userBooking.userPhone==="")}>Reserve</button>

                  </form>
                </div>
                {/* 3 */}
                <div class="col bg-light  border border-black">
                  <div class="container border-bottom border-black">
                    <div class="row align-items-start">
                      <div class="col-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="30"
                          viewBox="0 -960 960 960"
                          width="30"
                        >
                          <path d="M40-200v-585h60v394h353v-309h322q59.812 0 102.406 42.594Q920-614.812 920-555v355h-60v-131H100v131H40Zm230-249q-45 0-75.5-30.5T164-555q0-45 30.5-75.5T270-661q45 0 75.5 30.5T376-555q0 45-30.5 75.5T270-449Zm243 58h347v-164q0-35.062-24.969-60.031T775-640H513v249ZM270-509q19 0 32.5-13.5T316-555q0-19-13.5-32.5T270-601q-19 0-32.5 13.5T224-555q0 19 13.5 32.5T270-509Zm0-46Zm243-85v249-249Z" />
                        </svg>
                      </div>
                      <div class="col-11 fw-bold fs-4">
                        step 2: Property details
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <h5>Property highlights</h5>
                  <div class="container text-center">
                    <div class="row align-items-start">
                      <div class="col">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          viewBox="0 -960 960 960"
                          width="20"
                        >
                          <path d="M160-120v-60h639v60H160Zm151-120q-63 0-107-43.5T160-390v-450h660q24.75 0 42.375 17.625T880-780v160q0 24.75-17.625 42.375T820-560h-96v170q0 63-44 106.5T573-240H311Zm0-60h261.978Q609-300 636.5-327.5T664-390v-390H220v390q0 35 28 62.5t63 27.5Zm413-320h96v-160h-96v160Zm-282 80Z" />
                        </svg>
                        <span class="h6">Free breakfast</span>
                      </div>
                      <div class="col">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          viewBox="0 -960 960 960"
                          width="20"
                        >
                          <path d="m232-357-63-63q70-70 146.5-105T480-560q88 0 164.5 35T791-420l-63 63q-61-61-123-87t-125-26q-63 0-125 26t-123 87ZM63-526 0-589q93-95 216.5-153T480-800q140 0 263.5 58T960-589l-63 63q-88-84-192.5-134T480-710q-120 0-224.5 50T63-526Zm417 417 148-149q-29-29-66.5-45.5T480-320q-44 0-81.5 16.5T332-258l148 149Z" />
                        </svg>
                        <span class="h6">Free WiFi</span>
                      </div>
                      <div class="col">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          viewBox="0 -960 960 960"
                          width="20"
                        >
                          <path d="M200-204v54q0 12.75-8.625 21.375T170-120h-20q-12.75 0-21.375-8.625T120-150v-324l85-256q5-14 16.5-22t26.5-8h464q15 0 26.5 8t16.5 22l85 256v324q0 12.75-8.625 21.375T810-120h-21q-13 0-21-8.625T760-150v-54H200Zm3-330h554l-55-166H258l-55 166Zm-23 60v210-210Zm105.765 160Q309-314 324.5-329.75T340-368q0-23.333-15.75-39.667Q308.5-424 286-424q-23.333 0-39.667 16.265Q230-391.471 230-368.235 230-345 246.265-329.5q16.264 15.5 39.5 15.5ZM675-314q23.333 0 39.667-15.75Q731-345.5 731-368q0-23.333-16.265-39.667Q698.471-424 675.235-424 652-424 636.5-407.735q-15.5 16.264-15.5 39.5Q621-345 636.75-329.5T675-314Zm-495 50h600v-210H180v210Z" />
                        </svg>
                        <span class="h6">Free Parking</span>
                      </div>
                      <div class="col">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          viewBox="0 -960 960 960"
                          width="20"
                        >
                          <path d="M160-340v-380q0-41 19-71.5t58.5-50q39.5-19.5 100-29T480-880q86 0 146.5 9t99 28.5Q764-823 782-793t18 73v380q0 59-40.5 99.5T660-200l60 60v20h-70l-80-80H390l-80 80h-70v-20l60-60q-59 0-99.5-40.5T160-340Zm320-480q-120 0-173 15.5T231-760h501q-18-27-76.5-43.5T480-820ZM220-545h234v-155H220v155Zm440 60H220h520-80Zm-146-60h226v-155H514v155ZM335-315q23 0 39-16t16-39q0-23-16-39t-39-16q-23 0-39 16t-16 39q0 23 16 39t39 16Zm290 0q23 0 39-16t16-39q0-23-16-39t-39-16q-23 0-39 16t-16 39q0 23 16 39t39 16Zm-325 60h360q34 0 57-25t23-60v-145H220v145q0 35 23 60t57 25Zm180-505h252-501 249Z" />
                        </svg>
                        <span class="h6">Airport transfer</span>
                      </div>
                      <div class="col">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          viewBox="0 -960 960 960"
                          width="20"
                        >
                          <path d="m550-84-42-42 142-142-382-382-142 142-42-42 56-58-56-56 85-85-42-42 42-42 43 41 84-84 56 56 58-56 42 42-142 142 382 382 142-142 42 42-56 58 56 56-86 86 42 42-42 42-42-42-84 84-56-56-58 56Z" />
                        </svg>
                        <span class="h6">Gym</span>
                      </div>
                      <div class="col">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          viewBox="0 -960 960 960"
                          width="20"
                        >
                          <path d="m232-357-63-63q70-70 146.5-105T480-560q88 0 164.5 35T791-420l-63 63q-61-61-123-87t-125-26q-63 0-125 26t-123 87ZM63-526 0-589q93-95 216.5-153T480-800q140 0 263.5 58T960-589l-63 63q-88-84-192.5-134T480-710q-120 0-224.5 50T63-526Zm417 417 148-149q-29-29-66.5-45.5T480-320q-44 0-81.5 16.5T332-258l148 149Z" />
                        </svg>
                        <span class="h6">Internet access</span>
                      </div>
                    </div>
                  </div>
                  <h5 className="mt-5">Preferences</h5>
                  <h6>Smoking preferences are not guaranteed</h6>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="Smoking"
                    />
                    <label class="form-check-label" for="Smoking">
                      Smoking
                    </label>
                    <div className="container-fluid ">
                      <Nav.Link href="#home" className="link-underline-primary text-primary">
                        Any special requests?
                      </Nav.Link>
                    </div>
                    <div className="container-fluid">
                      <Nav.Link href="#home" className="link-underline-primary text-primary">
                        Any accessibility requests?
                      </Nav.Link>
                    </div>
                  </div>
                </div>
                {/* 4 */}
                <div class="col bg-light  border border-black">
                  <form>
                    <div class="container border-bottom border-black">
                      <div class="row align-items-start">
                        <div class="col-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="30"
                            viewBox="0 -960 960 960"
                            width="30"
                          >
                            <path d="M880-740v520q0 24-18 42t-42 18H140q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42ZM140-631h680v-109H140v109Zm0 129v282h680v-282H140Zm0 282v-520 520Z" />
                          </svg>
                        </div>
                        <div class="col-11 fw-bold fs-4">
                          step 3: Payment details
                        </div>
                      </div>
                    </div>
                    {/*  */}
                    <h6>We never charge any card fees</h6>
                    <div class="container border-bottom border-black">
                      <div class="row align-items-start">
                        <div class="col">
                          <div class="mb-3">
                            <label for="firstName2" class="form-label">
                              First Name
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="firstName2"
                              placeholder="First Name"
                            />
                          </div>
                          <div class="mb-3">
                            <label for="lastName2" class="form-label">
                              Last Name
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="lastName2"
                              placeholder="Last Name"
                            />
                          </div>
                          <div class="mb-3">
                            <label for="card" class="form-label">
                              Card Number
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="card"
                              placeholder="0000 0000 0000 0000"
                            />
                          </div>
                          <div class="mb-3 ">
                            <label for="date" class="form-label">
                              Expiry Date
                            </label>
                            <div class="col">
                              <input
                                className="form"
                                min="1"
                                max="12"
                                type="number"
                                id="date"
                                placeholder="MM"
                              />
                              /
                              <input
                                className="form"
                                min="1"
                                max="99"
                                type="number"
                                id="date"
                                placeholder="YY"
                              />
                            </div>
                          </div>
                          <div class="mb-3 ">
                            <label for="code" class="form-label">
                              Security Code
                            </label>
                            <div class="col">
                              <input
                                className="form"
                                min="0"
                                max="999"
                                type="number"
                                id="code"
                                placeholder="000"
                              />
                            </div>
                          </div>
                        </div>
                        {/*  */}
                        <div class="col">
                          <h6>We accept the following payment methods</h6>
                          <div class="container text-center">
                            <div class="row align-items-start">
                              <div class="col">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 48 48"
                                  width="48px"
                                  height="48px"
                                >
                                  <path
                                    fill="#1976D2"
                                    d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"
                                  />
                                  <path
                                    fill="#FFF"
                                    d="M22.255 20l-2.113 4.683L18.039 20h-2.695v6.726L12.341 20h-2.274L7 26.981h1.815l.671-1.558h3.432l.682 1.558h3.465v-5.185l2.299 5.185h1.563l2.351-5.095v5.095H25V20H22.255zM10.135 23.915l1.026-2.44 1.066 2.44H10.135zM37.883 23.413L41 20.018h-2.217l-1.994 2.164L34.86 20H28v6.982h6.635l2.092-2.311L38.767 27h2.21L37.883 23.413zM33.728 25.516h-4.011v-1.381h3.838v-1.323h-3.838v-1.308l4.234.012 1.693 1.897L33.728 25.516z"
                                  />
                                </svg>
                              </div>
                              <div class="col">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 48 48"
                                  width="48px"
                                  height="48px"
                                >
                                  <path
                                    fill="#0079be"
                                    d="M27.605,40.637C36.699,40.68,45,33.22,45,24.144C45,14.22,36.699,7.36,27.605,7.363h-7.827	C10.575,7.36,3,14.222,3,24.144c0,9.078,7.575,16.536,16.778,16.492H27.605z"
                                  />
                                  <path
                                    fill="#fff"
                                    d="M19.815,8.738C11.406,8.741,4.591,15.557,4.589,23.97c0.002,8.412,6.817,15.227,15.226,15.23	c8.412-0.003,15.228-6.819,15.229-15.23C35.043,15.557,28.227,8.741,19.815,8.738z M10.164,23.97L10.164,23.97	c0.008-4.111,2.575-7.617,6.196-9.01v18.018C12.739,31.586,10.172,28.082,10.164,23.97z M23.27,32.982L23.27,32.982V14.96	c3.622,1.39,6.193,4.897,6.2,9.01C29.463,28.085,26.891,31.59,23.27,32.982z"
                                  />
                                  <linearGradient
                                    id="KknhlWBW17Od_nHxRMHnTa"
                                    x1="6.434"
                                    x2="35.441"
                                    y1="6.522"
                                    y2="35.529"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop offset="0" stop-color="#199ae0" />
                                    <stop offset="1" stop-color="#0782d8" />
                                  </linearGradient>
                                  <path
                                    fill="url(#KknhlWBW17Od_nHxRMHnTa)"
                                    d="M27.605,41C36.699,41.044,45,33.421,45,24.148C45,14.006,36.699,6.997,27.605,7h-7.827	C10.575,6.997,3,14.008,3,24.148C3,33.423,10.575,41.044,19.778,41H27.605z"
                                  />
                                  <linearGradient
                                    id="KknhlWBW17Od_nHxRMHnTb"
                                    x1="7.191"
                                    x2="39.285"
                                    y1="11.192"
                                    y2="43.286"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop offset="0" stop-color="#fff" />
                                    <stop offset=".242" stop-color="#f2f2f2" />
                                    <stop offset="1" stop-color="#ccc" />
                                  </linearGradient>
                                  <path
                                    fill="url(#KknhlWBW17Od_nHxRMHnTb)"
                                    d="M19.999,9C11.715,9.003,5.002,15.716,5,24.001C5.002,32.285,11.715,38.997,19.999,39	c8.286-0.003,15-6.715,15.001-14.999C34.999,15.716,28.285,9.003,19.999,9z M10.491,24.001L10.491,24.001	c0.008-4.049,2.537-7.501,6.103-8.873v17.744C13.028,31.501,10.499,28.05,10.491,24.001z M23.401,32.876L23.401,32.876V15.127	c3.568,1.369,6.101,4.823,6.107,8.874C29.502,28.053,26.969,31.505,23.401,32.876z"
                                  />
                                </svg>
                              </div>
                              <div class="col">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 48 48"
                                  width="48px"
                                  height="48px"
                                >
                                  <path
                                    fill="#3F51B5"
                                    d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"
                                  />
                                  <path
                                    fill="#FFC107"
                                    d="M30 14A10 10 0 1 0 30 34A10 10 0 1 0 30 14Z"
                                  />
                                  <path
                                    fill="#FF3D00"
                                    d="M22.014,30c-0.464-0.617-0.863-1.284-1.176-2h5.325c0.278-0.636,0.496-1.304,0.637-2h-6.598C20.07,25.354,20,24.686,20,24h7c0-0.686-0.07-1.354-0.201-2h-6.598c0.142-0.696,0.359-1.364,0.637-2h5.325c-0.313-0.716-0.711-1.383-1.176-2h-2.973c0.437-0.58,0.93-1.122,1.481-1.595C21.747,14.909,19.481,14,17,14c-5.523,0-10,4.477-10,10s4.477,10,10,10c3.269,0,6.162-1.575,7.986-4H22.014z"
                                  />
                                </svg>
                              </div>
                              <div class="col">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 48 48"
                                  width="48px"
                                  height="48px"
                                >
                                  <path
                                    fill="#1565C0"
                                    d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"
                                  />
                                  <path
                                    fill="#FFF"
                                    d="M15.186 19l-2.626 7.832c0 0-.667-3.313-.733-3.729-1.495-3.411-3.701-3.221-3.701-3.221L10.726 30v-.002h3.161L18.258 19H15.186zM17.689 30L20.56 30 22.296 19 19.389 19zM38.008 19h-3.021l-4.71 11h2.852l.588-1.571h3.596L37.619 30h2.613L38.008 19zM34.513 26.328l1.563-4.157.818 4.157H34.513zM26.369 22.206c0-.606.498-1.057 1.926-1.057.928 0 1.991.674 1.991.674l.466-2.309c0 0-1.358-.515-2.691-.515-3.019 0-4.576 1.444-4.576 3.272 0 3.306 3.979 2.853 3.979 4.551 0 .291-.231.964-1.888.964-1.662 0-2.759-.609-2.759-.609l-.495 2.216c0 0 1.063.606 3.117.606 2.059 0 4.915-1.54 4.915-3.752C30.354 23.586 26.369 23.394 26.369 22.206z"
                                  />
                                  <path
                                    fill="#FFC107"
                                    d="M12.212,24.945l-0.966-4.748c0,0-0.437-1.029-1.573-1.029c-1.136,0-4.44,0-4.44,0S10.894,20.84,12.212,24.945z"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="col border border-black">
                            <ul class="list-unstyled">
                              <li>
                                <h6>You can count on us</h6>
                              </li>
                              <li>
                                <ul>
                                  <li>We use secure transmission</li>
                                  <li>We protect your personal information</li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="container border-bottom border-black">
                      <div class="row align-items-start">
                        <div class="col-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="30"
                            viewBox="0 -960 960 960"
                            width="30"
                          >
                            <path d="M480.089-490Q509-490 529.5-510.589q20.5-20.588 20.5-49.5Q550-589 529.411-609.5q-20.588-20.5-49.5-20.5Q451-630 430.5-609.411q-20.5 20.588-20.5 49.5Q410-531 430.589-510.5q20.588 20.5 49.5 20.5ZM480-159q133-121 196.5-219.5T740-552q0-117.79-75.292-192.895Q589.417-820 480-820t-184.708 75.105Q220-669.79 220-552q0 75 65 173.5T480-159Zm0 79Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-472Z" />
                          </svg>
                        </div>
                        <div class="col-11 fw-bold fs-4">Building Address</div>
                      </div>
                    </div>
                    <label for="country" class="form-label">
                      Country
                    </label>
                    <Form.Select
                      aria-label="Default select example"
                      id="country"
                    >
                      <option>Open this select menu</option>
                      <option value="1" selected>
                        Egypt
                      </option>
                      <option value="2">UAE</option>
                      <option value="3">Saudi Arabia</option>
                    </Form.Select>
                    <div class="mb-3">
                      <label for="postalCode" class="form-label">
                        Postal Code
                      </label>
                      <div class="form-text">
                        We'll use this to verify your card details
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        id="postalCode"
                        placeholder="Postal Code"
                      />
                    </div>
                  </form>
                </div>

                {/* 5 */}
                <div class="col bg-light  border border-black">
                  <h3 className="text-primary">
                    Create a Hotels.com® Rewards account
                  </h3>
                  <h5>Collect 10 stamps, get 1 reward* night</h5>
                  <Button variant="primary" className="mb-2">
                    Primary
                  </Button>
                </div>
                {/* 6 */}
                <div class="col bg-light  border border-black">
                  <h3>Cancellation policy</h3>
                  <h5>Deluxe Suite</h5>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        Fully refundable until 18/06/2023
                      </Accordion.Header>
                      <Accordion.Body>
                        If you change or cancel this booking after 18:00,
                        18/06/2023 property as local time (Eastern European
                        Standard Time), you won't be refunded any of the
                        payment. We are unable to refund any payment for
                        no-shows or early check out.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <ul class="list-unstyled">
                    <li>
                      You'll be asked to pay the following charges at the
                      property:
                      <ul>
                        <li>
                          Airplane and shuttle transfer per adult: USD 250
                          (one-way)
                        </li>
                        <li>
                          Airplane and shuttle transfer per child: USD 0
                          (one-way), from 1 to 18 years old
                        </li>
                      </ul>
                    </li>
                    <li>
                      We have included all charges provided to us by the
                      property.
                    </li>
                  </ul>
                </div>
                {/* 7 */}
                <div class="col bg-light  border border-black">
                  <div class="container border-bottom border-black">
                    <div class="row align-items-start">
                      <div class="col-8 text-end">Check-in</div>
                      <div class="col-4">Monday, {checkinValue} (12:30 PM)</div>
                    </div>
                    <div class="row align-items-start">
                      <div class="col-8 text-end">Check-out</div>
                      <div class="col-4">Tuesday,{checkoutValue} (12:30 PM)</div>
                    </div>
                    <div class="row align-items-start justify-content-end">
                      <div class="col text-end col-2 m-2 rounded text-end border border-success">
                        1 night, 1room
                      </div>
                    </div>
                  </div>
                  <h6>Nearly there! This is the final step.</h6>
                  <h6>Fully refundable if plans change</h6>
                  <h6>Terms of Booking</h6>
                  <div>
                    By clicking "Book", you agree you have read and accept our
                    Terms and Conditions , Privacy Policy and Government Travel
                    Advice .
                  </div>
                  <Button variant="primary" className="mb-2">
                    BOOK
                  </Button>
                </div>
                {/* 8 */}
                <div class="col">
                  <div
                    id="booking-form-footer"
                    class="fl-l w-full border-box fs-small clearfix mt-bird ph-spider"
                  >
                    <p>
                      Your agreement is with{" "}
                      <Nav.Link
                        role="button"
                        class="crsr-pointer"
                        id="trader-information-trigger"
                      >
                        Valencia Hotel
                      </Nav.Link>
                      .
                    </p>
                    <p
                      id="payment-processing-location-message"
                      class="mt-spider"
                    >
                      This payment will be processed in the US. This does not
                      apply when a travel provider (airline/hotel/rail, etc.)
                      processes your payment.
                    </p>
                    <div class="di-flex jc-sb ai-center mt-spider">
                      <p>
                        We will never sell your personal information and we use
                        secure transmission to protect your personal
                        information.
                      </p>
                      <div
                        class="pa-small bdra-big bd-all bc-1dl-neutral-500 bg-white ml-base ta-c ws-nw"
                        id="norton-logo"
                        title="Click to Verify - This site chose VeriSign SSL for secure e-commerce and confidential communications."
                      >
                        <script
                          defer=""
                          type="text/javascript"
                          src="https://seal.verisign.com/getseal?host_name=www.hotels.com&amp;size=S&amp;use_flash=NO&amp;use_transparent=YES&amp;lang=en"
                        >
                          {" "}
                        </script>
                        <Nav.Link
                          class="about-ssl-certificates di-b fw-bold"
                          href="https://www.symantec.com/page.jsp?id=how-ssl-works&amp;tab=secTab5"
                          target="_blank"
                        >
                          ABOUT SSL CERTIFICATES
                        </Nav.Link>
                      </div>
                    </div>
                    <p class="mt-spider">
                      Read our{" "}
                      <a
                        href="/customer_care/privacy.html"
                        class="external-link high-contrast"
                        target="_blank"
                        rel="noopener"
                        data-title="Privacy Statement"
                      >
                        Privacy Statement
                      </a>{" "}
                      for more information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* second column */}
        <div class="col-4 ">
          <div class="p-3 bg-light  border border-black">
            <div className="container-fluid">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={results.img2}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={results.img1}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={results.img3}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
              <div className="col-3 border border-danger border-2 mt-2 mb-2 text-danger fw-bolder">
                Just added
              </div>
              <h5>{results.name}</h5>
              <h6>{results.address}</h6>
              <div class="container border border-black">
                <div class="row align-items-start">
                  <div class="col-3 text-end">Check-in</div>
                  <div class="col-9 fw-bold">
                    Monday,{checkinValue} (12:30 PM)
                  </div>
                </div>
                <div class="row align-items-start">
                  <div class="col-3 text-end">Check-out</div>
                  <div class="col-9 fw-bold">
                    Tuesday, {checkoutValue} (12:30 PM)
                  </div>
                </div>
                <div class="row align-items-start justify-content-end">
                  <div class="col-4 m-2 text-end rounded border border-success">
                    1 night, 1room
                  </div>
                </div>
              </div>
            </div>
            <div className="border-bottom border-black fw-bold mt-4 p-2">
              Deluxe Suit
            </div>
            <div className="container-fluid border-bottom border-black">
              <div class="container px-0 ">
                <div class="row gx-5">
                  <div class="col-8">
                    <div class="p-3">Monday, {checkinValue}</div>
                  </div>
                  <div class="col-4">
                    <div class="p-3">{results.price}$</div>
                  </div>
                </div>
              </div>
              <div class="container px-0 ">
                <div class="row gx-5">
                  <div class="col-8">
                    <div class="p-3">Taxes and fees</div>
                  </div>
                  <div class="col-4">
                    <div class="p-3">100.0$</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-bottom border-black text-danger fw-bold mt-4 p-2">
              Saving: You're saving 10%
            </div>
            <div class="container px-0 fw-bolder ">
                <div class="row gx-5">
                  <div class="col-8">
                    <div class="p-3">Total Price</div>
                  </div>
                  <div class="col-4">
                    <div class="p-3">{(results.price+100)}$</div>
                  </div>
                </div>
              </div>
              <div className="container-fluid border-top border-black "><Nav.Link href="#home" className="text-primary">Apply a coupon</Nav.Link></div>
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
}
