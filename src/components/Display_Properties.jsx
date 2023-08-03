import React, { useState } from 'react'
import property from '../data/data'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiOutlineHeart } from "react-icons/ai";
import { BiBed } from "react-icons/bi";
import { BiBath } from "react-icons/bi";
import { HiMiniSquare2Stack } from "react-icons/hi2";
export const Display_Properties = ({house,setHouse}) => {


  return (
    <div className='property_card'>
    <Row className='ul'>
    {
        house.map((data)=>(

          <Col className='li'>
          <div className="card_wrapper">
            <img src={`${data.image}`} alt="" className="card_img" width="304px"/>
            <div className="card_content">
                <div className="price">
                    ${data.price} <span style={{fontSize:"12px",color:"gray",opacity:"0.7"}}>/month</span>
                    <span className='heart'>
                        <button className='btn  '>
                            <AiOutlineHeart color='rgb(104, 6, 233)'/>
                        </button>
                    </span>
                </div>
                <div className='card_location'>{data.area}</div>
                <div className="card_address">{data.address}</div>
                <hr />
                <div className="info">
                    <span><BiBed size={18}/> {data.beds} Beds</span>
                    <span> <BiBath size={18}/> {data.baths} Bathrooms</span>
                    <span> <HiMiniSquare2Stack size={18}/> {data.floorspace} &#x33A1;</span>
                </div>
            </div>
          </div>
          </Col> 

        ))
    }
    
        
    </Row>
    </div>
  )
}
