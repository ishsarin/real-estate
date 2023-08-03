import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import property from "../data/data";
export const Search_Properties = ({house,setHouse}) => {

  
    const propType = [... new Set(property.map((data)=>{
    return data.type;
  })),"All"]
  // console.log(propType)
  const [item,setItem] = useState(propType);

  
  const searchProperties = (houseType,mini,maxi)=>{
  // const searchProperties = (mini,maxi)=>{
    let updatedHouse = property.filter((data)=>{

      // console.log(mini);
      // return data.price>mini;

      if(houseType==="All"){
        return data.type!==houseType && (data.price>=mini && data.price<maxi);
      }
      
      return data.type===houseType && (data.price>=mini && data.price<maxi);
      
    })
   if(updatedHouse.length===0){
    const att = document.querySelector(".error");
    att.hidden = false;
    setHouse(updatedHouse);

   }
      else{
        const att = document.querySelector(".error");
        att.hidden = true;
      
        setHouse(updatedHouse);
      
      }
      


  }

  
  const getFilter = ()=>{
    let type = document.querySelector(".prop_type")
    let property_type = type.options[type.selectedIndex].text; 
    // console.log(property_type);


    let price = document.querySelector(".price_range");
    let price_range_selected = price.options[price.selectedIndex].text;
    

    let mini = price_range_selected.split(" ")[0];
    let min_value = mini.slice(1);
    
    let maxi = price_range_selected.split(" ")[2];
    let max_value = maxi.slice(1);
    if(price_range_selected==="$6000 and Above"){
      max_value = Number.MAX_VALUE;
    }
    // console.log(max_value)
    searchProperties(property_type,min_value,max_value);
    

   
  }

  return (
    <div className="search">
      <div className="search_wrapper">
        <div className="search_content">
          <h1 className=" f-500 search_text">Search properties to rent</h1>
          <Form.Select aria-label="Default select example" className="search_select f-500">
            <option disabled selected hidden>Search with Search Bar</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </div>
       
     </div>
     <div className="searching_wrapper">
        <div className="search_details">
            <div className="location">
            <Form.Label htmlFor="">Location</Form.Label>
            <div style={{fontWeight:"700",fontSize:"18px"}}>New York, USA</div>
            
            </div>
            <div className="vr" />
            <div className="in-date">
            <Form.Label htmlFor="">When</Form.Label>
            <div>

            <input type="date" value="Select Move-in Date" placeholder="Select Move-in Date"/>
            </div>
            </div>
            <div className="vr" />
            <div className="price">
            <Form.Label htmlFor="">Price</Form.Label>
            <Form.Select aria-label="Default select example" className="price_range">
            {/* <option disabled selected hidden>Select Price Range</option> */}
            <option value="1">$2000 - $4000</option>
            <option value="2">$4000 - $6000</option>
            <option value="3">$6000 and Above</option>
          </Form.Select>
            </div>
            <div className="vr" />
            <div className="type">
            <Form.Label htmlFor="">Property Type</Form.Label>
            <Form.Select aria-label="Default select example" className="prop_type">
            {/* <option disabled selected hidden>Property Type</option> */}
            {
              item.map((property_type,index)=>{
               return <option value={index}>{property_type}</option>
              })
            }
          </Form.Select>
            </div>
            <div className="vr" />
            <div>
                <button className="btn btn-purple btn-search"  onClick={getFilter}>Search</button>
             </div>
            </div>
            
        </div> 
        <div className="error" hidden>No Result, Please choose a different Filter !!</div>   
    </div>
  );
};
