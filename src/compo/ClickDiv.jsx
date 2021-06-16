import React, { useState } from 'react';


function ClickDiv(props) {
    const [show,setShow]=useState(false);
    const [lishow,lisetShow]=useState(false);
    const [li2show,li2setShow]=useState(false);

    return (
        <div className="container">
        
           <div className="click" onClick={()=>setShow(!show)}>Click Here</div>
        
        <hr/> 

          { show? <div className="showdiv " >
          <ul className="detail-side">
              <li onClick={()=>lisetShow(!lishow)}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </li>
              <li onClick={()=>li2setShow(!li2show)}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li onClick={()=>lisetShow(!lishow)}>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</li>
              <li onClick={()=>lisetShow(!lishow)}>Lorem ipsum dolor sit amet consectetur adipisicing elit..</li>
              <li onClick={()=>lisetShow(!lishow)}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          </ul>
            </div>:null} 
            
            {lishow? <div className="side-list-data">
                <ul className="d2">
                    <li>1</li>
                    <li>2</li>
                    <li>2</li>
                </ul>
            </div>:null}

            {li2show? <div className="side-list-data">
                <ul className="d2">
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                </ul>
            </div>:null}

        </div>
    );
}

export default ClickDiv;