import React, { useContext } from 'react'
import { LanguageContext } from '../../context/languageContext'
import { CurrencyContext } from '../../context/currencyContext'

export default function LangChange() {
    
    const {languageValue,setLanguageValue} = useContext(LanguageContext)
    const {currencyValue,setCurrencyValue} = useContext(CurrencyContext)

    const changelang = ()=>{
        if (languageValue==='English') {
            setLanguageValue('Arabic')
        }else {
            setLanguageValue('English')
        }
    }
    const changeCurrency = ()=>{
        if (currencyValue==='Dollar') {
            setCurrencyValue('Pound')
        }else {
            setCurrencyValue('Dollar')
        }
    }
  return (
    <div className='container m-auto border 'style={{height:"400px"}}>
        <div className='row'>
        <h6 >Langauge : {languageValue}<button className='btn btn-primary m-5' onClick={()=>{changelang()}}>Change language</button> </h6>
        
        <h6 >Currency : {currencyValue}<button className='btn btn-success m-5' onClick={()=>{changeCurrency()}}>Change Currency</button></h6>
        </div>  
    </div>
  )
}
