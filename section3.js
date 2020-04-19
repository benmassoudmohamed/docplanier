import React, { Component } from 'react';

class  Section3 extends Component {
    state = {
        partenaire:[{href:"https://www.znanylekarz.pl/?_ga=2.150360118.1834537081.1583742570-169603227.1583742570",value:"Znanylekarz"},{href:"https://www.doctoralia.es/",value:"Doktortakvimi"},{href:"https://www.znamylekar.cz/",value:"Znanylekarz"}],
      
    }
    render() { 

        return ( <div>
            <div className="div1">
                <span>We are a global company
                    with local culture</span>
                  
            </div>
            <div className="partenaire">
            {this.state.partenaire.map(el=><div>
                <img src='https://www.docplanner.com/img/sygnet.png'/>
                <a className="logoPartenaire" href={el.href}>{el.value}</a>
            </div>
           )}
           
               

            </div>
        </div>

         );
    }
}
 
export default Section3 ;