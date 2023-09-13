import React from 'react';
import { ReactDOM } from 'react';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom';




class Youtube extends React.Component {
 constructor() {
   super()

 }
 
    render() {
    return (
      
        
            <div className='heading'>
              <div className='jumbotron text-center' id='heading'>
                <h1 className='myname'>Prashanth</h1>
                <p className='myoccupation'>UI Full Stack Developer</p>
                <ul className='nav nav-pills nav-justified' id="navigation">
                    <li className='nav-item'>
                      <a className='nav-link active' href='/'>
                        Home
                      </a>
                    </li> 
                    <li className='nav-item'>
                      <a className='nav-link active' href='/project'>
                        Project
                      </a>
                    </li> 
                    <li className='nav-item'>
                      <a className='nav-link active' href='/youtube'>
                        YouTube
                      </a>
                    </li> 
                    <li className='nav-item'>
                      <a className='nav-link active' href='/contact '>
                        Contact
                      </a>
                    </li> 
                </ul>
              </div>

              <div className='container'>
                <div className='row'>
                  
                    <div className='col-sm-4'>
                         <div>
                            <div className='embed-responsive embed-responsive-16by9'>
                              
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/Ul3y1LXxzdU" title="YouTube video player"
                             frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
                             picture-in-picture; web-share" allowfullscreen>
                            </iframe>
                            </div>
                         <p className='skills' style={{textAlign: "justify"}}>
                         Travel and Tourism is a web application where the people can book their in online with the help of internet.
                          This project is the Travel application where people can book their destination like U.S, Sri Lanka, Dubai and Germany in online. He/she can look for beautiful destination and can book the destination. User can view the particular destination in the gallery. The user can book for the destination and can talk to us.
                        The design of this project is very simple so that the user won't find any difficulties while working on it
                         </p>
                    </div>
                </div>
              </div>

              <br />
              <div className='container'>
                <div className='row'>
                  
                    <div className='col-sm-12'>
                         <h2 className='myskills' style={{ textAlign: 'justify'}}>
                            Project
                            </h2>
                         <div>
                            <div className='embed-responsive embed-responsive-16by9'>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/Ul3y1LXxzdU" title="YouTube video player"
                             frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
                             picture-in-picture; web-share" allowfullscreen>
                            </iframe>
                            </div>
                         <p className='skills' style={{textAlign: "justify"}}>
                         Travel and Tourism is a web application where the people can book their in online with the help of internet.
                          This project is the Travel application where people can book their destination like U.S, Sri Lanka, Dubai and Germany in online. He/she can look for beautiful destination and can book the destination. User can view the particular destination in the gallery. The user can book for the destination and can talk to us.
                        The design of this project is very simple so that the user won't find any difficulties while working on it
                         </p>
                    </div>
                </div>
              </div>

              <div className='container'>
                <div className='row'>
                  
                    <div className='col-sm-12'>
                         <h2 className='myskills' style={{ textAlign: 'justify'}}>
                            Project
                            </h2>
                         <div>
                            <div className='embed-responsive embed-responsive-16by9'>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/Ul3y1LXxzdU" title="YouTube video player"
                             frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
                             picture-in-picture; web-share" allowfullscreen>
                            </iframe>
                            </div>
                         <p className='skills' style={{textAlign: "justify"}}>
                         Travel and Tourism is a web application where the people can book their in online with the help of internet.
                          This project is the Travel application where people can book their destination like U.S, Sri Lanka, Dubai and Germany in online. He/she can look for beautiful destination and can book the destination. User can view the particular destination in the gallery. The user can book for the destination and can talk to us.
                        The design of this project is very simple so that the user won't find any difficulties while working on it
                         </p>
                    </div>
                </div>
              </div>
              </div>
            
            <div className='jumbotron text-center' id='footer'>
                <ul className='nav justify-content-center'>
                    <li className='nav-item'>
                     <a href='https://www.linkedin.com/' 
                      className='fa fa-linkedin nav-link'
                      style={{color :"blue"}}                    
                     />
                    </li>
                    <li className='nav-item'>
                     <a href='https://www.youtube.com/' 
                      className='fa fa-youtube nav-link'
                      style={{color :"blue"}}                    
                     />
                    </li>
                    <li className='nav-item'>
                     <a href='https://www.github.com/' 
                      className='fa fa-github nav-link'
                      style={{color :"blue"}}                    
                     />
                    </li>
                    <li className='nav-item'>
                     <a href='https://www.instagram.com/' 
                      className='fa fa-intagarm nav-link'
                      style={{color :"blue"}}                    
                     />
                    </li>
                    <li className='nav-item'>
                     <a href='https://www.facebook.com/' 
                      className='fa fa-facebook nav-link'
                      style={{color :"blue"}}                    
                     />
                    </li>
                    <li className='nav-item'>
                     <a href='https://www.twitter.com/' 
                      className='fa fa-twitter nav-link'
                      style={{color :"blue"}}                    
                     />
                    </li>
                </ul>
            </div>
       </div>
      </div>
      </div> 
      )

  }

}

export default Youtube;
