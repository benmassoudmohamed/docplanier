import React, { Component } from 'react';
class Section4 extends Component {
    state = {
        bloc1 :[{h1:"The world's biggest healthcare platform",span:"We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries",src:"https://www.docplanner.com/img/logo.png"}],
     
        case:[{class:"case1",h2:"Leader in 10 countries",span:"Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile",src:"https://www.docplanner.com/img/flag.png"},{class:"case2",h2:"1.5 million appointments",span:"booked last month"},{class:"case3",h2:"30 million unique patients",src:"https://www.docplanner.com/img/patients.png",span:"visit us every month"},{class:"case4",h2:"2 million active doctors",src:"https://www.docplanner.com/img/doctors.png",span:"trust in our solutions"}],
       
      }
    render() { 
        return (<section className="section4">
            <div className="bloc1">
            {this.state.bloc1.map(el=><h1><a h1={el.h1}>{el.span}</a></h1>)}
            </div>
                        
                    
              
            <div className="bloc2">
            {this.state.case.map(el=><div className={el.class}>
              <img src={el.src}/>
            <h2>{el.h2}</h2>
              <p>{el.span}</p>
            </div>
              )}
            </div>
        </section> );
    }
}
 
export default Section4;