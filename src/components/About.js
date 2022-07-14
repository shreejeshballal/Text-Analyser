import React, { useState } from 'react'

export default function About(props) {
    
    // const [myStyle,setmyStyle] = useState({
    //     color:'dark',
    //     backgroundColor:'white',
    //     border:'1px solid white'
    // });
    let myStyle ={
        color:props.mode ==='dark'?'white':'rgb(58 47 49 / 1)',
        backgroundColor:props.mode==='dark'?'rgb(58 47 49 / 1)':'white' ,
        // border:'0.3px solid',
        borderColor:props.mode==='dark'?'white':'black'
    }
  
    return (
    <div className='container' style={{color:props.mode ==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'black':'white'}}>
        <h1 className="my-3 px-3">About Us</h1>
        <div className="accordion mx-3" id="accordionExample" style={myStyle}>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                    <b>Analyse your Text</b>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                   Sup Guys.This is TextUtils. A Place to configure your text according to your needs. Have fun!
                </div>
                </div>
            </div>
            
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <b>Contact Us</b>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <p><b>Email</b> : herbiemaster@gmail.com</p>
                    <p><b>Phone No</b> : 9999999999</p>
                </div>
                </div>
            </div>

           
            </div>
               
    </div>
  )
}
