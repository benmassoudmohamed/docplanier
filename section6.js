import React, { Component } from 'react';
class Section6 extends Component {
    state = {
        tab: [{href: "https://www.docplanner.com/career?&loc=spain#jobs-offers", src: "https://www.docplanner.com/images/barcelona.png",span:" warsaw"},
        {href: "https://www.docplanner.com/career?&loc=poland#jobs-offers", src: "https://www.docplanner.com/images/istanbul.png",span:"Barcelone"},
        {href:"https://www.docplanner.com/career?&loc=poland#jobs-offers", src: "https://www.docplanner.com/images/istanbul.png",span:"Istanbul"},
        {href:"https://www.docplanner.com/career?&loc=poland#jobs-offers", src: "https://www.docplanner.com/images/rome.png",span:"Rome"},
        {href:"https://www.docplanner.com/career?&loc=poland#jobs-offers", src: "https://www.docplanner.com/images/mexico-city.png",span:"Mexico"},
        {href:"https://www.docplanner.com/career?&loc=poland#jobs-offers", src: "https://www.docplanner.com/images/curitiba.png",span:"curtiba"}],

      }
    render() {
            return(  
           
                 <section className = "section6" >
                    <h1>Improve the lives of millions. Change yours forever</h1>
                    <span>More than 1000 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona,
                Istanbul, Rome, Mexico City and Curitiba, our search for great talent never stops</span>
e
        {this.state.tab.map(el=><div className="divImg">
            <a href={el.href}><img
                src={el.src}/></a>


                <div className="Img">
                    {el.span}
                   
                        <button className="button">SEE OPENINGS</button>
               
            </div>
            </div>)}            
        
            </section>
        );
    }
}
 
export default Section6;