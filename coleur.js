import React, { Component } from 'react';
class Coleur extends Component {
    state = {
        select:[{option:"0",value:"CHOOSE COUNTRY"},{option:"1",value:"CHOOSE COUNTRY"},{option:"2",value:"CHOOSE COUNTRY"},
        {option:"3",value:"CHOOSE COUNTRY"},{option:"4",value:"CHOOSE COUNTRY"},{option:"5",value:"CHOOSE COUNTRY"},
        {option:"6",value:"CHOOSE COUNTRY"},{option:"7",value:"CHOOSE COUNTRY"},{option:"8",value:"CHOOSE COUNTRY"},
        {option:"9",value:"CHOOSE COUNTRY"},{option:"10",value:"CHOOSE COUNTRY"},{option:"11",value:"CHOOSE COUNTRY"},
        {option:"12",value:"CHOOSE COUNTRY"},{option:"13",value:"CHOOSE COUNTRY"},{option:"14",value:"CHOOSE COUNTRY"},
        {option:"15",value:"CHOOSE COUNTRY"}],
    
     }
    render() { 
        return ( <div>
            <div className="coleur1">
                    <span>For patients</span>
                    <h4>Find a doctor, book a visit and
                        solve any health-related doubt</h4>
                    <div className="custom-select" style={{width:"200px"}}>
                        <select style={{height: "50px"}}>
                            {this.state.select.map(el=><option><a option value={el.option}>{el.value}</a></option>)}
                        </select>
                        <img class="img3" src="https://www.docplanner.com/img/screen-marketplace@2x.png"/>
                    </div>
            </div>
            <div className="coleur2">
                    <span>For doctors</span>
                    Save time managing visits and
                        cut no-shows by half
                    <img className="img4" src="https://www.docplanner.com/img/screen-saas@2x.png"/>
                </div>
         </div>

         );
    }
}
 
export default Coleur;
