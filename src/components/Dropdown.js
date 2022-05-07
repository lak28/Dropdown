import React, { useState } from 'react'

export default function Dropdown(props) {
    const [isclicked, SetIsClicked] = useState(false);         //useState hook is used to store the state of the component. Default value is false here 

    const options = props.options;      // The dropdown options array

    return (

        //on hovering upon the select container , the options list is shown

        <div className='dropdown'>
            <h4>My React Dropdown </h4><br />
            <div className="btn-primary btn"  style={{backgroundColor: "#FF0000",color:"white",fontWeight:"bolder", borderRadius:"5px",width:"100px",height:"30px"}}  onMouseEnter={e => SetIsClicked(!isclicked)} onClick={e => SetIsClicked(!isclicked)} >Select
                <span className="fa fa-caret-down" ></span>
            </div>
            {isclicked &&                          //conditional rendering
                <ul className='dropdown-container' >
                    {options.map((option, i) => {                  // the array is traversed and the dropdown list is generated. Option parameter is the array element here.

                        //the index is used as key as the options are not dynamic here. When clicked the state is changed to the negation of previous state value.
                        return (
                            <li className="dropdown-item" key={i} onClick={e => SetIsClicked(!isclicked)} >
                                {option}
                            </li>
                        );
                    })}
                </ul>}
        </div>
    )
}
