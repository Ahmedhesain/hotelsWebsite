import React ,{useState,useEffect,useContext} from 'react';
import { collection ,getDoc,doc, getDocs} from 'firebase/firestore';

import { SearchContext } from '../../context/context';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../store/actions/action';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { IdContext } from '../../context/contextId';
import { db } from '../results/firebase';
import {AiFillCar, AiFillFormatPainter, AiOutlineArrowRight, AiOutlineCheck, AiOutlineCoffee, AiOutlineFork, AiOutlineWifi} from 'react-icons/ai'
import { BiArrowBack, BiBed, BiBuilding, BiBus, BiCloudSnow, BiCurrentLocation, BiMoon,  BiPaperPlane } from 'react-icons/bi'
import { IoMdStar } from 'react-icons/io'
import {  GiForkKnifeSpoon,  } from 'react-icons/gi'
import { BsFillPersonFill, BsInfo } from 'react-icons/bs'
import { FaAccessibleIcon, FaAlignRight, FaArrowDown, FaBus, FaCar, FaCartPlus, FaGrinStars, FaLocationArrow, FaPersonBooth, FaPlane} from 'react-icons/fa'

import Carousel from 'react-bootstrap/Carousel';
import LoadingSpinner from '../results/loading';
import ImageViewer from 'react-simple-image-viewer';
import i18n from '../../i18n';

function Details() {
    const[results,setRes]=useState({});
    const[allresults,setAllRes]=useState([]);

    var {searchValue,setSearchValue}=useContext(SearchContext)
    var {idValue,setIdValue}=useContext(IdContext)
    const [loading, setLoading] = useState(false);

    function getAllData(){
      const resultsCollection=collection(db,searchValue);
      getDocs(resultsCollection).then(res=>{
       const result =res.docs.map(doc=>({
        data:doc.data(),
        id:doc.id
       }))
       setAllRes(result);
      }).catch(err=>{console.log(err);});
    }
  
   
  useEffect(() =>{
    getData();
    getAllData();

  },[]);


  async function  getData(){
    setLoading(true)
    const resultItem=doc(db,searchValue,idValue);
     const  docSnap=await getDoc(resultItem);
    console.log(docSnap.data())
    setRes(docSnap.data())
    setLoading(false)
  }
  return (
    loading?<div style={{width:"100%",paddingLeft:"50%"}}><LoadingSpinner /></div>:<div>
<div className="container " dir={`${i18n.language === "en" ? "ltr" : "rtl"}`}>
     
        <div className="row">
            <div className="col-6">
                <img className="img-fluid" src={results.img1} alt='af1'/>
            </div>
            <div className="col-6">
           <div className='row'>
            <div className="col-6">
                <img className="img-fluid" src={results.img2} alt='af1'/>
            </div>
            <div className="col-6">
                <img className="img-fluid" src={results.img3} alt='af1'/>
            </div>
            <div className="col-6">
                <img className="img-fluid" src={results.img4} alt='af1'/>
            </div>
            <div className="col-6">
                <img className="img-fluid" src={results.img5} alt='af1'/>
            </div>
            </div>
            </div>

        </div>
        <div className="row" >
        <ul className="nav nav-underline position-relative">
            <li className="nav-item">
               < a className="nav-link active" aria-current="page" href="#">{i18n.language==="en"?`Overview`:`ملخص`}</a>
            </li>
            <li className="nav-item">
             <a className="nav-link" href="#second">{i18n.language==="en"?`Rooms`:`غرف`}</a>
             </li>
           <li className="nav-item">
             <a className="nav-link" href="#third">{i18n.language==="en"?`Location`:`موقع`}</a>
            </li>
          <li className="nav-item">
           <a className="nav-link " href="#fourth">{i18n.language==="en"?`Amenities`:`وسائل الراحة`}</a>
         </li>
         <li className="nav-item">
           <a className="nav-link " href="#fifth">{i18n.language==="en"?`Policies`:`سياسات`}</a>
         </li>
         <li className="nav-item">
         <a className=" nav-link " href="#second">{i18n.language==="en"?`Reserve Rooms`:`إحجز غرف`}</a>
         </li>
        </ul>


        <hr/>
        </div>
        <div className="row p-3">
            <div className="col-sm-8">
                <h1>{i18n.language==="en"?`${results.name}`:`${results.nameAR}`}</h1>
                <p>{i18n.language==="en"?`${results.city}`:`${results.cityAR}`}</p>
                <p>{i18n.language==="en"?`${results.discription}`:`${results.discriptionAR}`}</p>
                <h3>{results.evaluation}/10 {results.rate}</h3>
                <button className="btn text-start text-primary"  >{i18n.language==="en"?`See all 268 reviews`:`اطلع على جميع التعليقات البالغ عددها 268`}<AiOutlineArrowRight /></button>
                <h3>{i18n.language==="en"?`Popular amenities`:`وسائل الراحة الشائعة`}</h3>
                <div className='row'>
                <div className="col-6">
                    <p><AiOutlineCoffee/>{i18n.language==="en"?`Free breakfast`:`فطور مجاني`} </p>
                    <p><AiFillCar/>{i18n.language==="en"?`Free parking`:`موقف سيارات مجاني`} </p>
                    <p><GiForkKnifeSpoon/>{i18n.language==="en"?`Free Restaurant`:`مطعم مجاني`} </p>

                </div>
                <div className="col-6">
                    <p><BiBus/> {i18n.language==="en"?`Airport transfers`:`انتقالات المطار`}</p>
                    <p><AiOutlineWifi/> {i18n.language==="en"?`Free WiFi`:`واى فاى مجانى`}</p>
                    <p><BiCloudSnow/>{i18n.language==="en"?`Air conditioning`:`تكيف`}</p>

                </div>
                </div>
            </div>
            <div className="col-sm-4">
            <div ><iframe width="100%" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=1%20sekt%20elfadl,%20Talaat%20Harb,%20st,%20Cairo%20Governorate+(Valencia%20hotel)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">{i18n.language==="en"?`area maps`:`خرائط المنطقة`}</a></iframe></div>
                
                <p>{i18n.language==="en"?`${results.address}`:`${results.addressAR}`}</p>
                <button className="btn text-start text-primary"  >{i18n.language==="en"?`View in a map`:`عرض في الخريطة`} <AiOutlineArrowRight /></button>
                <h3>{i18n.language==="en"?`What's around`:`ماذا يوجد في الجوار`}</h3>
                <p><BiCurrentLocation/>  {i18n.language==="en"?`${results.around}`:`${results.aroundAR}`}</p>
                
            </div>
        </div>

        <h1>{i18n.language==="en"?`Choose your room`:`اختر غرفتك`}</h1>

        <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 g-4"  id='second'>
         <div className="col">
           <div className="card">
              <Carousel>
              <Carousel.Item>
              <img className="d-block w-100" src={results.img2} alt="First slide" />
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
      <div className="card-body position-relative">
        <h5 className="card-title">{i18n.language==="en"?`${results.discription}`:`${results.discriptionAR}`}</h5>
        <p className="card-text">{results.evaluation}/10 {i18n.language==="en"?`good`:`جيد`} </p>
        <p className="card-text"><BiBuilding/> {i18n.language==="en"?`City view`:`اطلالة المدينة`}</p>
        <p className="card-text"><BsFillPersonFill/> {i18n.language==="en"?`Sleeps`:`ينام`} {results.beds}</p>
        <p className="card-text"> <AiOutlineWifi/> {i18n.language==="en"?`Free WiFi`:`واى فاى مجانى`}</p>
        <p className="card-text"><AiOutlineCoffee/>{i18n.language==="en"?`Free breakfast`:`فطور مجاني`} </p>
        <p className="card-text"><AiFillCar/> {i18n.language==="en"?`Free self parking`:`موقف سيارات مجاني`}</p>
        <p className="card-text"><BsFillPersonFill/> {i18n.language==="en"?`${results.address}`:`${results.addressAR}`}</p>
        <p className="card-text"><BiBed/> {results.beds} {i18n.language==="en"?`King Bed`:`سرير ملكي`}</p>
        <p className="card-text"><BiMoon/> {i18n.language==="en"?`Collect and Redeem`:`جمع واسترداد`}</p>
        <a href='#' >{i18n.language==="en"?"more details":"المزيد من التفاصيل"} <AiOutlineArrowRight /> </a>
        <hr />
        <h6 className="card-title">{i18n.language==="en"?`Cancellation policy`:`سياسة الإلغاء`}</h6>
        <a href='#' >{i18n.language==="en"?`More details on all policy options`:`مزيد من التفاصيل حول جميع خيارات السياسة`}<BsInfo/></a>
        <div className="form-check">
           <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
             <label className="form-check-label" for="flexRadioDefault1">
                 {i18n.language==="en"?`Non-refundable`:`غير قابل للاسترجاع`}
              </label>
             </div>
            <div className="form-check">
             <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
             <label className="form-check-label" for="flexRadioDefault2">
             {i18n.language==="en"?`Fully refundable before 18 Jun 2023`:`قابل للاسترداد بالكامل قبل 18 حزيران (يونيو) 2023`}
            </label>
           </div>
           <h5> <span className="badge bg-danger">{i18n.language==="en"?`10% off`:`10% خصم`}</span></h5>
           <h3>€{results.price}</h3>
           <span>{i18n.language==="en"?`for 1 night includes taxes & fees`:`لليلة واحدة شاملة الضرائب والرسوم`}</span><br/>
           <a href='#' >{i18n.language==="en"?`Price details`:`تفاصيل السعر`} <AiOutlineArrowRight /> </a>
           <hr></hr>
           <h3><button  className="btn btn-primary   end-0  " > <Link to='/booking' style={{textDecoration: "none" ,color: "white"}}>{i18n.language==="en"?`Reserve`:`إحجز`}</Link> </button></h3>
           


       </div>
      </div>
    </div>
 

        </div>

        <div className="row p-2" id='third'>
            <h2>{i18n.language==="en"?`You may also like`:`ربما يعجبك أيضا`}</h2>
            <Carousel>
      <Carousel.Item>
      <div className="row row-cols-1 row-cols-md-3 g-4">

        {
          allresults.map(result =>  <div className="col">
          <div className="card">
            <img src={result.data.img1} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{i18n.language==="en"?`${result.data.name}`:`${result.data.nameAR}`}</h5>
              <IoMdStar size={25 } color='black' className='filled' /><IoMdStar size={25 } color='black' className='filled' /><IoMdStar size={25 } color='black' className='filled' /><IoMdStar size={25 } color='black' className='filled' /><IoMdStar size={25 } color='black' className='filled' />
              <p className="card-text">{i18n.language==="en"?`${result.data.address}`:`${result.data.addressAR}`}</p>
              <div className="row">
                  <div className="col-6"><h6>{i18n.language==="en"?`${result.data.city}`:`${result.data.cityAR}`} <span class="badge bg-secondary">{i18n.language==="en"?`New`:`جديد`}</span></h6> {i18n.language==="en"?`Very Good`:`جيد جدًا`}</div>
                  <div className="col-6"><h2>${result.data.price}</h2>
                  <p>{i18n.language==="en"?`for 1 night`:`لمدة ليلة واحدة`}</p></div>
      
              </div>
            </div>
          </div>
        </div> )
        }

  
  
  
</div>
        
      </Carousel.Item>
      
    </Carousel>
        </div>

        <div className='row p-3 border mt-3 mb-3' id='fourth'>
          <div className="col-4">
            <h2> {i18n.language==="en"?`About this area`:`حول هذه المنطقة`}</h2>
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col-12">
              <div className="card w-100 " >
            <div ><iframe width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=1%20sekt%20elfadl,%20Talaat%20Harb,%20st,%20Cairo%20Governorate+(Valencia%20hotel)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">area maps</a></iframe></div>
                   
                     <div className="card-body">
                          <a href="#" > {i18n.language==="en"?`View in map`:`عرض في الخريطة`}</a>
                      </div>
                 </div>
              </div>
              <div className="row p-4">
              <div className="col-6 ">
                <h3><FaLocationArrow/>{i18n.language==="en"?` What's nearby`:`ماذا يوجد بالجوار`}</h3>
                <p>{i18n.language==="en"?`In Downtown Cairo`:`في وسط القاهرة`}</p>
                <p>{i18n.language==="en"?`Egyptian Museum - 11 min walk`:`المتحف المصري - 11 دقيقة / دقائق سيرا`}</p>
                <p>{i18n.language==="en"?`Tahrir Square - 1 min drive`:`ميدان التحرير - 1 دقيقة بالسيارة`}</p>
                <p>{i18n.language==="en"?`The Grand Egyptian Museum - 19 min drive`:`المتحف المصري الكبير - 19 دقيقة بالسيارة`}</p>
                <p>{i18n.language==="en"?`City Stars - 13 min drive`:`سيتى ستارز - 13 دقيقة بالسيارة`}</p>
                <p>{i18n.language==="en"?`Giza Pyramid Complex - 16 min drive`:`مجمع أهرامات الجيزة - 16 دقيقة / دقائق بالسيارة`}</p>
                <p>{i18n.language==="en"?`Pyramid of Khufu - 17 min drive`:`هرم خوفو - 17 دقيقة / دقائق بالسيارة`}</p>
                <p>{i18n.language==="en"?`Great Sphinx of Giza - 17 min drive`:`تمثال أبو الهول بالجيزة - 17 دقيقة / دقائق بالسيارة`}</p>
                <h3><FaCar/> {i18n.language==="en"?`Getting around`:`التجوال `}</h3>
                <p><FaPlane/> {i18n.language==="en"?`Cairo (CAI-Cairo Intl.) - 35 min drive`:`القاهرة (CAI - مطار القاهرة الدولي) - 35 دقيقة / دقائق بالسيارة`}</p>
                <p><FaPlane/> {i18n.language==="en"?`Giza (SPX-Sphinx Intl.) - 49 min drive`:`الجيزة (SPX- مطار سفنكس الدولي) - 49 دقيقة / دقائق بالسيارة`}</p>
                <p><FaBus/>{i18n.language==="en"?` Cairo Rames Station - 21 min walk`:`محطة رمسيس بالقاهرة - 21 دقيقة / دقائق سيرا`}</p>
                <p><FaBus/> {i18n.language==="en"?`Free train station pickup`:`استقبال مجاني من محطة القطار`}</p>
                <p><FaBus/> {i18n.language==="en"?`Airport shuttle (surcharge)`:`نقل المطار (بتكلفة إضافية)`}</p>
                <p><FaBus/> {i18n.language==="en"?`Free train station drop-off`:`إنزال مجاني إلى محطة القطار`}</p>
                <p><FaBus/> {i18n.language==="en"?`Bus station shuttle (surcharge)`:`حافلة نقل مكوكية من محطة الحافلات (بتكلفة إضافية)`}</p>

              </div>
              <div className="col-6">
                <h3><AiOutlineFork/> {i18n.language==="en"?`Restaurants`:`مطاعم`}</h3>
                <p> {i18n.language==="en"?`Kentucky - 2 min walk`:`2 - كنتاكي دقيقة سيرا على الأقدام`}</p>
                <p> {i18n.language==="en"?`Costa Coffee - 3 min walk`:`كوستا كوفي - 3 دقيقة / دقائق سيرا`}</p>
                <p> {i18n.language==="en"?`Coffee Between the Two Banks - 4 min walk`:`قهوة بين الضفتين - 4 دقائق سيرا على الأقدام`}</p>
                <p>{i18n.language==="en"?`Caribou - 7 min walk`:`كاريبو - 7 دقيقة / دقائق سيرا`}</p>
                <p> {i18n.language==="en"?`McDonalds - 2 min walk`:`ماكدونالدز - 2 دقيقة / دقائق سيرا`}</p>
              </div>
              </div>
              

            </div>
          </div>


        </div>

        <div className=" row p-3 border mt-3 mb-3" id='fifth'>
          <div className="row p-3">
            <div className="col-4">
              <h2>{i18n.language==="en"?`About this property`:`حول هذا العقار`}</h2>

            </div>
            <div className="col-8">
              <h4>{i18n.language==="en"?`${results.name}`:`${results.nameAR}`}</h4>
              <p>{i18n.language==="en"?`${results.name} offers an airport shuttle (available 24 hours) for USD 15 per vehicle one-way. For a bite to eat, guests can visit VALENCIA, which serves breakfast. This Art Deco hotel is also 0.6 mi (1 km) from Egyptian Museum. Fellow travellers like the comfortable beds and helpful staff.`:`${results.nameAR} تقدم خدمة نقل المطار (متوفرة على مدار 24 ساعة) مقابل 15 دولارًا أمريكيًا للمركبة ذهابًا وإيابًا. لتناول الطعام ، يمكن للضيوف زيارة VALENCIA التي تقدم وجبة الإفطار. يقع هذا الفندق على طراز فن الآرت ديكو ، على بُعد كيلومتر واحد (كيلومتر واحد) من المتحف المصري. المسافرين يحبون الأسرة المريحة والموظفين المتعاونين.`}</p>
              <h4 className='mt-3'>{i18n.language==="en"?`Languages`:`اللغات`}</h4>
              <p>{i18n.language==="en"?`Arabic, Chinese (Mandarin), English, French, German, Italian, Japanese, Spanish`:`العربية ، الصينية (الماندرين) ، الإنجليزية ، الفرنسية ، الألمانية ، الإيطالية ، اليابانية ، الإسبانية`}</p>
            </div>

          </div>
          <hr/>
          <div className="row p-3 ">
            <div className="col-4">
              <h2>{i18n.language==="en"?`Cleaning and safety practices`:`ممارسات التنظيف والسلامة`}</h2>
              
            </div>
            <div className="col-8">
             <h4><FaGrinStars/> {i18n.language==="en"?`Enhanced cleanliness measures`:`إجراءات نظافة محسنة`}</h4>
              <p>{i18n.language==="en"?`Disinfectant is used to clean the property`:`مطهر يستخدم لتنظيف الممتلكات`}</p>
              <p>{i18n.language==="en"?`High-touch surfaces are cleaned and disinfected`:`يتم تنظيف وتعقيم الأسطح عالية اللمس`}</p>
              <p>{i18n.language==="en"?`The property is disinfected using an electrostatic spray`:`يتم تطهير الممتلكات باستخدام رذاذ كهرباء`}</p>
              <p>{i18n.language==="en"?`Sheets and towels are washed at 60°C or hotter`:`يتم غسل الملاءات والمناشف عند 60 درجة مئوية أو أكثر`}</p>
              <p>{i18n.language==="en"?`Guest accommodation is sealed after cleaning`:`يتم إغلاق مكان إقامة النزلاء بعد التنظيف`}</p>
              <p>{i18n.language==="en"?`Follows the industry cleaning and disinfection practices of Intertek Cristal (third-party expert - Global), Safe Travels (WTTC - Global) and COVID-19 Guidelines (CDC)`:`يتبع ممارسات التنظيف والتعقيم الصناعية الخاصة بإرشادات Intertek Cristal (خبير طرف ثالث - عالمي) و Safe Travels (WTTC - عالمي) وإرشادات COVID-19 (CDC)`}</p>
            <h4 className='mt-3'><FaPersonBooth/> {i18n.language==="en"?`Check-in`:`تسجيلات الوصول`}</h4>
              <p>{i18n.language==="en"?`Contactless social distancing and check-out`:`التباعد الاجتماعي وتسجيل المغادرة`}</p>
              <p>{i18n.language==="en"?`Cashless transactions are available for all charges at the property`:`المعاملات غير النقدية متاحة لجميع الرسوم في العقار`}</p>
              <p>{i18n.language==="en"?`Protective shields in place at main contact areas`:`الدروع الواقية في مكانها في مناطق التلامس الرئيسية`}</p>
              <p>{i18n.language==="en"?`Guest accommodations are accessible via mobile device`:`يمكن الوصول إلى أماكن إقامة الضيوف عبر الجهاز المحمول`}</p>
               <p>{i18n.language==="en"?`Guest rooms kept vacant for 24 hours between stays`:`غرف النزلاء ظلت شاغرة لمدة 24 ساعة بين الإقامات`}</p>
              <p>{i18n.language==="en"?`Social distancing measures in place`:`تدابير التباعد الاجتماعي المعمول بها`}</p>
              <p>{i18n.language==="en"?`Contactless room service is available.`:`تتوفر خدمة الغرف بدون تلامس.`}</p>
            <h4 className='mt-3'><FaAlignRight/> {i18n.language==="en"?`Safety measures`:`اجراءات السلامة`}</h4>
              <p>{i18n.language==="en"?`Personal protective equipment worn by staff`:`معدات الحماية الشخصية التي يرتديها الموظفون`}</p>
              <p>{i18n.language==="en"?`Temperature checks given to staff`:`فحوصات درجة الحرارة الممنوحة للموظفين`}</p>
              <p>{i18n.language==="en"?`Temperature checks available for guests`:`تتوفر فحوصات درجة الحرارة للضيوف`}</p>
              <p>{i18n.language==="en"?`Masks and gloves available`:`الأقنعة والقفازات المتاحة`}</p>
              <p>{i18n.language==="en"?`Masks are required at the property`:`الأقنعة مطلوبة في العقار`}</p>
              <p>{i18n.language==="en"?`Hand sanitiser provided`:`يتم توفير معقم اليدين`}</p>
              <p>{i18n.language==="en"?`Enhanced food service safety measures are in place`:`وجود تدابير معززة لسلامة الخدمات الغذائية`}</p>
              <p>{i18n.language==="en"?`Individually wrapped food options available for breakfast, lunch, dinner and through room service`:`تتوفر خيارات طعام ملفوفة بشكل فردي للإفطار والغداء والعشاء ومن خلال خدمة الغرف`}</p>
              <p>{i18n.language==="en"?`Reservations are required for the use of certain on-site facilities`:`التحفظات مطلوبة لاستخدام بعض المرافق في الموقع`}</p>




            </div>

          </div>
        </div>

        <div className=" row p-3 border mt-3 mb-3">
          <div className="row mb-2 ">
            <div className="col-4">
              <h2>{i18n.language==="en"?`At a glance`:`في لمحة`}</h2>
            </div>
            <div className="col-8">
              <div className="row">
                <div className="col-6">
                  <h4><AiOutlineCheck/>{i18n.language==="en"?`Hotel size`:`حجم الفندق`}</h4>
                  <p>{i18n.language==="en"?`50 rooms`:`50 غرفة`}</p>
                  <p>{i18n.language==="en"?`Arranged over 3 floors`:`رتبت أكثر من 3 طوابق`}</p>
                  <h4 className='mt-2'><AiOutlineCheck/> {i18n.language==="en"?` Arriving/Leaving`:`الوصول / المغادرة`}</h4>
                  <p> {i18n.language==="en"?`Check-in time from 12:30 PM until 11:30 AM`:`وقت تسجيل الوصول من الساعة ١٢:٣٠ ظهرًا حتى الساعة ١١:٣٠ صباحًا`}</p>
                  <p> {i18n.language==="en"?`Early check-in subject to availability`:`يخضع تسجيل الوصول المبكر للتوافر`}</p>
                  <p> {i18n.language==="en"?`Late check-in subject to availability`:`تسجيل الوصول المتأخر رهن بالتوافر`}</p>
                  <p> {i18n.language==="en"?`Minimum check-in age - 15`:`الحد الأدنى لسن تسجيل الوصول - 15`}</p>
                  <p> {i18n.language==="en"?`Check-out time is 12:30 PM`:`وقت تسجيل المغادرة هو: 12:30 ظهراً`}</p>
                  <p> {i18n.language==="en"?`Late check-out subject to availability`:`تسجيل المغادرة المتأخر رهن بالتوافر`}</p>
                  <h4 className='mt-2'><AiOutlineCheck/>  {i18n.language==="en"?`Restrictions related to your trip`:`القيود المتعلقة برحلتك`}</h4>
                  <p> {i18n.language==="en"?`Check COVID-19 restrictions`:`تحقق من قيود COVID-19`}</p>
                  <h4 className='mt-2'><AiOutlineCheck/>  {i18n.language==="en"?`Special check-in instructions`:`تعليمات خاصة لتسجيل الوصول`}</h4>
                  <p> {i18n.language==="en"?`This property offers transfers from the airport (surcharges may apply); to arrange pick-up, guests must contact the property 24 hours prior to arrival, using the contact information on the booking confirmation`:`تقدم هذه المنشأة خدمة النقل من المطار (قد يتم تطبيق رسوم إضافية) ؛ لترتيب النقل ، يجب على الضيوف الاتصال بالمنشأة قبل 24 ساعة من الوصول باستخدام معلومات الاتصال الموجودة في تأكيد الحجز`} </p>
                  <p> {i18n.language==="en"?`Guests will receive an email 5 days before arrival with check-in instructions; front desk staff will greet guests on arrival`:`سيتلقى الضيوف رسالة بريد إلكتروني قبل 5 أيام من الوصول تحتوي على تعليمات تسجيل الوصول ؛ سيقوم موظفو مكتب الاستقبال بتحية الضيوف عند الوصول`} </p>
                  <p>  {i18n.language==="en"?`To make arrangements for check-in please contact the property at least 24 hours before arrival using the information on the booking confirmation`:`لإجراء ترتيبات تسجيل الوصول ، يرجى الاتصال بالعقار قبل 24 ساعة على الأقل من الوصول باستخدام المعلومات الواردة في تأكيد الحجز`}</p>

                </div>
                <div className="col-6">
                <h4><AiOutlineCheck/>  {i18n.language==="en"?`Required at check-in`:`مطلوب عند تسجيل الوصول`}</h4>
                  <p>  {i18n.language==="en"?`Cash deposit required for incidental charges`:`الإيداع النقدي مطلوب لدفع أي مصروفات عرضية`}</p>
                  <p> {i18n.language==="en"?`Government-issued photo ID may be required`:`قد تكون هناك حاجة لبطاقة هوية تحمل صورة صادرة عن الحكومة`}</p>
                  <p>{i18n.language==="en"?` Minimum check-in age is 15`:`الحد الأدنى لسن تسجيل الوصول هو 15 عامًا`}</p>
                  <h4 className='mt-2'><AiOutlineCheck/>  {i18n.language==="en"?`Children`:`أطفال`}</h4>
                  <p> {i18n.language==="en"?`One child (12 years old and younger) stays free when occupying the parent or guardian's room using existing bedding`:`طفل واحد (12 عامًا وأقل) يقيم مجانًا عند شغل غرفة الوالدين أو الوصي باستخدام الأسرّة الموجودة`}</p>
                  <h4 className='mt-2'><AiOutlineWifi/>  {i18n.language==="en"?`Internet`:`إنترنت`}</h4>
                  <p>{i18n.language==="en"?`Free WiFi and wired Internet access in public areas`:`خدمة الواي فاي والاتصال السلكي بالإنترنت في الأماكن العامة مجانًا`}</p>
                  <p>{i18n.language==="en"?`Free WiFi and wired Internet access in rooms`:`خدمة الواي فاي والاتصال السلكي بالإنترنت في الغرف مجانًا`}</p>
                  <h4 className='mt-2'><FaCar/>  {i18n.language==="en"?`Internet`:`إنترنت`}</h4>
                  <p>{i18n.language==="en"?`Free on-site self-parking`:`مواقف مجانية للسيارات في الموقع`}</p>
                  <h4 className='mt-2'><AiOutlineCheck/>{i18n.language==="en"?`Transfers`:`التنقلات`}</h4>
                  <p>{i18n.language==="en"?`Airport shuttle on request (available 24 hours a day)*`:`خدمة نقل المطار عند الطلب (متوفرة على مدار 24 ساعة في اليوم) *`}</p>
                  <p>{i18n.language==="en"?`Free train station shuttle on request (available 24 hours a day)`:`خدمة نقل مجانية إلى محطة القطار عند الطلب (متوفرة على مدار 24 ساعة في اليوم)`}</p>
                  <p>{i18n.language==="en"?`Bus station shuttle*`:`حافلة محطة الحافلات *`}</p>
                  <h4 className='mt-2'><AiOutlineCheck/>{i18n.language==="en"?`Other information`:`معلومات أخرى`}</h4>
                  <p>{i18n.language==="en"?`Smoke-free property`:`ملكية خالية من التدخين`}</p>
             
                </div>
              </div>
            </div>
            <a  href="#">{i18n.language==="en"?`*See fees and policies for additional details or extra charges`:`* راجع الرسوم والسياسات للحصول على تفاصيل إضافية أو رسوم إضافية`}<FaArrowDown/></a>
          </div>

          
          <hr/>
          <div className="row ">
            <div className="col-4">
              <h2>{i18n.language==="en"?`Property amenities`:`وسائل الراحة في الممتلكات`}</h2>
            </div>
            <div className="col-8">
              <div className="row">
                <div className="col-6">
                  <h4><AiOutlineFork/> {i18n.language==="en"?`Food and drink`:`طعام و شراب`}</h4>
                  <p>{i18n.language==="en"?`Free continental breakfast each morning 7:00 AM-11 AM`:`إفطار كونتيننتال مجاني كل صباح 7:00 صباحًا - 11 صباحًا`}</p>
                  <p>{i18n.language==="en"?`Restaurant`:`مطعم`}</p>
                  <p>{i18n.language==="en"?`Bar/lounge`:`بار / ردهة`}</p>
                  <p>{i18n.language==="en"?`Coffee shop`:`مقهى`}</p>
                  <p>{i18n.language==="en"?`Coffee/tea in a common area`:`قهوة / شاي في منطقة مشتركة`}</p>
                  <p>{i18n.language==="en"?`Free daily reception`:`استقبال يومي مجاني`}</p>
                  <p>{i18n.language==="en"?`Shared microwave`:`ميكروويف مشترك`}</p>
                  <p>{i18n.language==="en"?`24-hour room service`:`خدمة الغرف على مدار 24 ساعة`}</p>
                  <p>{i18n.language==="en"?`Water dispenser`:`موزع المياه`}</p>
                  <h4 className='mt-2'><FaPersonBooth/>{i18n.language==="en"?`Travelling with children`:`السفر مع الأطفال`}</h4>
                  <p> (see details){i18n.language==="en"?`Children stay for free`:`يقيم الأطفال مجانًا`}</p>
                  <p>{i18n.language==="en"?`Art supplies`:`لوازم فنية`}</p>
                  <h4 className='mt-2'><FaCartPlus/>{i18n.language==="en"?`What to do`:`ما يجب القيام به`}</h4>
                  <p>{i18n.language==="en"?`Shopping`:`التسوق`}</p>
                  <p>{i18n.language==="en"?`Access to nearby health club`:`الوصول إلى النادي الصحي القريب`}</p>
                  <p>{i18n.language==="en"?`Free bikes nearby`:`دراجات مجانية في مكان قريب`}</p>
                  <p>{i18n.language==="en"?`Hiking/biking trails nearby`:`مسارات المشي لمسافات طويلة / ركوب الدراجات في مكان قريب`}</p>
                  <p>{i18n.language==="en"?`Horse riding nearby`:`ركوب الخيل في مكان قريب`}</p>
                  <h4 className='mt-2'><AiFillFormatPainter/>{i18n.language==="en"?`Services`:`خدمات`}</h4>
                  <p>{i18n.language==="en"?`24-hour front desk`:`مكتب استقبال يعمل على مدار 24 ساعة`}</p>
                  <p>{i18n.language==="en"?`Concierge services`:`خدمات الاستقبال والإرشاد`}</p>
                  <p>{i18n.language==="en"?`Tour/ticket assistance`:`المساعدة في تنظيم الجولات وحجز التذاكر`}</p>
                  <p>{i18n.language==="en"?`Limo or town car service`:`خدمة سيارات الليموزين أو سيارات المدينة`}</p>
                  <p>{i18n.language==="en"?`Dry cleaning/laundry services`:`التنظيف الجاف / خدمات الغسيل`}</p>
                  <p>{i18n.language==="en"?`Free newspapers in reception`:`جرائد مجانية في الاستقبال`}</p>
                  <p>{i18n.language==="en"?`Luggage storage`:`تخزين الأمتعة`}</p>
                  <p>{i18n.language==="en"?`Wedding services`:`خدمات الزفاف`}</p>
                  <p>{i18n.language==="en"?`Multilingual staff`:`طاقم متعدد اللغات`}</p>
                  <p>{i18n.language==="en"?`Porter/bellhop`:`بورتر / بيلهوب`}</p>
                </div>
                <div className="col-6">
                  <h4><AiOutlineCheck/> {i18n.language==="en"?`Facilities`:`مرافق`}</h4>
                  <p>{i18n.language==="en"?`1 building/tower`:`1 بناء / برج`}</p>
                  <p>{i18n.language==="en"?`Built in 2000`:`بنيت عام 2000`}</p>
                  <p>{i18n.language==="en"?`ATM/banking`:`أجهزة الصراف الآلي / الخدمات المصرفية`}</p>
                  <p>{i18n.language==="en"?`Safe-deposit box at front desk`:`صندوق ودائع آمن في مكتب الاستقبال`}</p>
                  <p>{i18n.language==="en"?`Library`:`مكتبة`}</p>
                  <p>{i18n.language==="en"?`Fireplace in reception`:`الموقد في الاستقبال`}</p>
                  <p>{i18n.language==="en"?`Television in common areas`:`التلفاز في الأماكن العامة`}</p>
                  <p>{i18n.language==="en"?`Art gallery on-site`:`معرض فني بالموقع`}</p>
                  <p>{i18n.language==="en"?`Shopping centre on-site`:`مركز تسوق في الموقع`}</p>
                  <p>{i18n.language==="en"?`Lockers available`:`الخزائن المتاحة`}</p>
                  <p>{i18n.language==="en"?`Banquet hall`:`قاعة الولائم`}</p>
                  <p>{i18n.language==="en"?`Reception hall`:`صالة استقبال`}</p>
                  <h4 className='mt-2'><FaAccessibleIcon/> {i18n.language==="en"?`Accessibility`:`إمكانية الوصول`}</h4>
                  <p>{i18n.language==="en"?`Lift (selected rooms)`:`رفع (الغرف المختارة)`}</p>
                  <p>{i18n.language==="en"?`Accessible bathroom (selected rooms)`:`حمام يسهل الوصول إليه (غرف مختارة)`}</p>
                  <p>{i18n.language==="en"?`In-room accessibility (selected rooms)`:`إمكانية الوصول داخل الغرفة (الغرف المختارة)`}</p>
                  <p>{i18n.language==="en"?`Roll-in shower (selected rooms)`:`دش قابل للطي (غرف مختارة)`}</p>
                  <p>{i18n.language==="en"?`Wheelchair-accessible`:`تسهيلات لدخول المعاقين`}</p>
                  <p>{i18n.language==="en"?`Braille signage`:`لافتات برايل`}</p>
                  <p>{i18n.language==="en"?`Hand-held shower heads`:`رؤوس دش محمولة`}</p>
                  <p>{i18n.language==="en"?`Raised toilet seat`:`مقعد مرحاض مرتفع`}</p>
                  <p>{i18n.language==="en"?`Low-height worktop and sink`:`سطح عمل منخفض الارتفاع وحوض`}</p>
                  <p>{i18n.language==="en"?`Grab bar near toilet`:`انتزاع شريط بالقرب من المرحاض`}</p>
                  <p>{i18n.language==="en"?`Transfer shower`:`دش نقل`}</p>
                  <p>{i18n.language==="en"?`Well-lit path to entrance`:`طريق جيد الإضاءة إلى المدخل`}</p>
                  <p>{i18n.language==="en"?`Step-free path to entrance`:`طريق خالي من الدرجات إلى المدخل`}</p>


                </div>
              </div>
            </div>
          </div>
          
          <hr/>
          <div className="row ">
            <div className="col-4">
              <h2>{i18n.language==="en"?`Room amenities`:`وسائل الراحة في الغرفة`}</h2>
            </div>
            <div className="col-8">
              <div className="row">
                <div className="col-6">
                  <h4><AiOutlineCheck/>{i18n.language==="en"?`Be entertained`:`كن مستمتعا`}</h4>
                  <p>{i18n.language==="en"?`42-inch flat-screen TV`:`تلفزيون بشاشة مسطحة 42 بوصة`}</p>
                  <h4 className='mt-2'><AiOutlineCheck/>{i18n.language==="en"?`Home comfort`:`الراحة في المنزل`}</h4>
                  <p>{i18n.language==="en"?`Air conditioning and heating`:`التكييف والتدفئة`}</p>
                  <p>{i18n.language==="en"?`Minibar`:`ميني بار`}</p>
                  <p>{i18n.language==="en"?`Coffee/tea maker`:`ماكينة صنع القهوة / الشاي`}</p>
                  <p>{i18n.language==="en"?`Electric kettle`:`غلاية كهربائية`}</p>

                  <h4 className='mt-2'><AiOutlineCheck/>{i18n.language==="en"?`Sleep well`:`نم جيداً`}</h4>
                  <p>{i18n.language==="en"?`Hypo-allergenic bedding`:`فراش لا يسبب الحساسية`}</p>
                  <p>{i18n.language==="en"?`Pillow menu`:`قائمة الوسائد`}</p>
                  <p>{i18n.language==="en"?`Down duvet`:`لحاف من أسفل`}</p>
                  <p>{i18n.language==="en"?`Soundproofed rooms`:`غرف عازلة للصوت`}</p>
                  <p>{i18n.language==="en"?`Premium bedding`:`مفروشات فاخرة`}</p>
                  <p>{i18n.language==="en"?`Memory-foam mattress`:`مرتبة ميموري فوم`}</p>

                  <h4 className='mt-2'><AiOutlineCheck/>{i18n.language==="en"?`What to enjoy`:`ماذا تستمتع`}</h4>
                  <p>{i18n.language==="en"?`Balcony`:`شرفة`}</p>
                  <p>{i18n.language==="en"?`Fireplace`:`المدفأة`}</p>
                  <p>{i18n.language==="en"?`Individually furnished and decorated`:`مؤثثة ومزينة بشكل فردي`}</p>
                  <p>{i18n.language==="en"?`Separate dining area`:`منطقة طعام منفصلة`}</p>
                  <p>{i18n.language==="en"?`Heated floors`:`أرضيات مدفئة`}</p>


                </div>
                <div className="col-6">
                <h4><AiOutlineCheck/>{i18n.language==="en"?`Freshen up`:`ينعش`}</h4>
                <p>{i18n.language==="en"?`Rainfall shower heads`:`رؤوس دش الأمطار`}</p>
                <p>{i18n.language==="en"?`Shower only`:`الاستحمام فقط`}</p>
                <p>{i18n.language==="en"?`Bidet`:`شطاف`}</p>
                <p>{i18n.language==="en"?`Free toiletries`:`لوازم استحمام مجانية`}</p>
                <p>{i18n.language==="en"?`Hairdryer`:`مجفف شعر`}</p>

                <h4 className='mt-2'><AiOutlineCheck/>{i18n.language==="en"?`Stay connected`:`ابق على اتصال`}</h4>
                <p>{i18n.language==="en"?`Desk`:`مكتب`}</p>
                <p>{i18n.language==="en"?`Free newspapers`:`صحف مجانية`}</p>
                <p>{i18n.language==="en"?`Free WiFi and wired Internet`:`إنترنت سلكي وواي فاي مجاني`}</p>
                <p>{i18n.language==="en"?`Phone`:`هاتف`}</p>
                <p>{i18n.language==="en"?`Printer`:`طابعة`}</p>
                
                <h4 className='mt-2'><AiOutlineCheck/>{i18n.language==="en"?`Food and drink`:`طعام و شراب`}</h4>
                <p>{i18n.language==="en"?`Freezer`:`الفريزر`}</p>
                <p>{i18n.language==="en"?`Ice maker`:`صانع الثلج`}</p>
                <p>{i18n.language==="en"?`Paper towels`:`مناديل ورقية`}</p>

                <h4 className='mt-2'><AiOutlineCheck/>More{i18n.language==="en"?``:``}</h4>
                <p>{i18n.language==="en"?`Daily housekeeping`:`التدبير المنزلي اليومي`}</p>
                <p>{i18n.language==="en"?`In-room safe`:`خزنة في الغرفة`}</p>
                <p>{i18n.language==="en"?`Mobile key entry`:`إدخال مفتاح المحمول`}</p>

                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="row">
        </div>
    </div>
    </div>

  );
}

export default Details;
