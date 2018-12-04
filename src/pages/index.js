import React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/zoneSvg.svg'
import SignIn from '../images/SignIN.svg'
import SignUp from '../images/SignOUT.svg'
import  MainmobileOrdi from '../components/MainmobileOrdi.js'
import  MainpageMobile from '../components/MainpageMobile.js'
import firebase from '../config.js'
import { navigate } from "gatsby"


export default class Indexpage extends React.Component {



  render() {


     const handleMobile =  ()=>{

    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
  ){
    return(<MainpageMobile/>)
  }
    else{
    return(<MainmobileOrdi/>)
    }

    }
    return (

      <div className="firstPage">
           {handleMobile()}
      </div>

          )
     }
}