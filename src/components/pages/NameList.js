import Item from "../Item";
import { useEffect } from "react";
import { useState } from "react";
function NameList()
{

    const [count,setCount]=useState(0);
    const [data,setData]=useState([])

    const countIncrement=()=>
    {
        setCount(count+1);
    }
 
      useEffect(()=>
      {
        fetch("https://randomuser.me/api").then((response)=>
        {
            console.log(response);
            return response.json();
        }).then((responseData)=>{
            console.log(responseData);
           setData([...data,responseData.results[0]])
        })
      },[count]);

      return <div className="mt-3">
        <button onClick={countIncrement} className="btn btn-primary m-5 float-left">Add User</button>
      
        {data.map((item)=>(<Item key={item.id.value} name={item.name.first} picture={item.picture.medium} location={item.location.city} email={item.email} dob={item.dob.date}/>))}
      </div>



  
}
export default NameList;