import React from "react";
import $ from 'jquery';
import './cityComponent.css';


const click = () =>{

    $('.dropdown-el').click(function(event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).toggleClass('expanded');
        $('#'+$(event.target).attr('for')).prop('checked',true);
      });
      $(document).click(function() {
        $('.dropdown-el').removeClass('expanded');
    });
}


const CityComponent = () =>{
    

    return (
        <div>
            <span onClick={click} class="dropdown-el">
                <input type="radio" name="city" defaultChecked id="beograd"/><label htmlFor="beograd">BEOGRAD</label>
                <input type="radio" name="city" id="novisad"/><label htmlFor="novisad">NOVI SAD</label> 
             </span>
        </div>  
    )
}

export default CityComponent;