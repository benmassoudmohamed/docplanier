import React, { Component } from 'react';
class Footer extends Component {
    state = {
        footer:[{href:"https://www.znanylekarz.pl/?_ga=2.157047867.1834537081.1583742570-169603227.1583742570",spna"Poland"},{href:"https://www.znanylekarz.pl/?_ga=2.157047867.1834537081.1583742570-169603227.1583742570",
    span:"Turkey,"},{href:"https://www.znanylekarz.pl/?_ga=2.157047867.1834537081.1583742570-169603227.1583742570",span:"Spain,"},{href:"https://www.znanylekarz.pl/?_ga=2.157047867.1834537081.1583742570-169603227.1583742570",span:"Italy,"},{
        href:"https://www.znanylekarz.pl/?_ga=2.157047867.1834537081.1583742570-169603227.1583742570",span:"Czech Republic,"},
        {
            href:"https://www.znanylekarz.pl/?_ga=2.157047867.1834537081.1583742570-169603227.1583742570",span:"Czech Republic,"},{
                href:"https://www.znanylekarz.pl/?_ga=2.157047867.1834537081.1583742570-169603227.1583742570",span:"Czech Republic,"},{
                    href:"https://www.znanylekarz.pl/?_ga=2.157047867.1834537081.1583742570-169603227.1583742570",span:"Czech Republic,"},{
                        href:"https://www.znanylekarz.pl/?_ga=2.157047867.1834537081.1583742570-169603227.1583742570",span:"Czech Republic,"},{
                            href:"https://www.znanylekarz.pl/?_ga=2.157047867.1834537081.1583742570-169603227.1583742570",span:"Czech Republic,"},{
                                href:"https://www.znanylekarz.pl/?_ga=2.157047867.1834537081.1583742570-169603227.1583742570",span:"Czech Republic,"}],
                                
                            
                        
                    
                
            
    
      }
    render() { 
        return (  <section className="section7">
                We are leaders in 10 countries: 
                  {this.map.footer (el=><span className="bleu">
                   < a href={el.href}>{el.span}</a>
                   </span>
                    <span>This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.www.docplanner.com © 2020</span>)}
                    
            </section>

       
            
        );
    }
}
 
export default Footer;
