import React, { Component } from 'react';
class Section2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text:["We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere."," We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctor are able not only to improve their online presence, but also to devote their time to what really matters: their patients."]
            

}
        }
    
    render() { 
        return ( <div>
           
            <div className="">
        {this.state.text.map(el=><p>{el}</p>)}
            </div>
        {/* <p>{this.state.text.p1}</p>
        <p>{this.state.text.p2}</p> */}

        </div>

         );
    }
}
 
export default Section2 ;