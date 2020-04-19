import React, { Component } from 'react';
class Navmenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdown:[{href:"https://www.docplanner.com/department?dep=marketing",value:"Marketing&PR"},{href:"https://www.docplanner.com/department?dep=customer",value:"Customer Succes & Sales"},{href:"https://www.docplanner.com/department?dep=it",value:"IT,Product,Desing&UK,Data"},{href:"https://www.docplanner.com/department?dep=finance",value:"Marketing&PR"},{href:"https://www.docplanner.com/department?dep=hr",value:"Marketing&PR"}],
            link1:[{href:"https://www.docplanner.com/about-us",value:"About us"},{href:"https://www.docplanner.com/career",value:"Career"},{value:"Departments"}],

         
        }
       
    }
    render() { 
        return (<nav className="Navmenu">
            <img className="Img1" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"/>
            <ul className="link1">
            {this.state.link1.map(el=>(el.value!=="Departments")? <li><a className="vert" href={el.href}>{el.value}</a></li>:<li className="drop"><a href="">{el.value} </a>
                    <ul className="dropdown">
                {this.state.dropdown.map(el=><li><a href={el.href}>{el.value}</a></li>)}
                        
                        
                    </ul>

                </li>)}
                
                
                
            </ul>

        </nav>
            
         );
    }
}
 
export default Navmenu;