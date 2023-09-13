import React from 'react';
import { ReactDOM } from 'react';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom';
import pras from '../src/pras.jpeg';




class Home extends React.Component {
 constructor() {
   super()
 

 }
 
    render() {
    return (
      <div>
        <body>
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
                        <div className='rounded-circle'>
                            <img src={pras}
                             className='rounded-circle mx-auto d-block'
                             width="130px"
                             height="150px"
                             />
                        </div>
                        <br/>
                    </div>
                    <div className='col-sm-8'>
                         <h2 className='myskills'>Career Objective</h2>
                         <br />
                         <p className='skills'>
                            To work in a professional environment where i can find myself in decessive opporunties for creating value added Career for myself and extended quality service to my organization
                         </p>
                    </div>
                </div>
              </div>
              <br />
              <div className='conatiner'>
                <div className='row'>
                    <div className='col-sm-6'>
                     <h2 className='myskills'>Technical Skills</h2>
                     <br />
                     <ul className='skills'>
                        <li>
                            FrontEnd Languages - HTML, CSS, JAVASCRIPT, TYPESCRIPT, ANGULAR, REACT JS
                        </li>
                        <li>
                            BackEnd Languages - NODE JS
                        </li>
                        <li>
                            Database - MYSQL, MONGO DB
                        </li>
                     </ul>
                    </div>
                    <div className='col-sm-6'>
                        <h2 className='myskills'>Internship Certification</h2>
                        <br />
                        <ul className='skills'>
                            <li>
                                I donee my Web Development at PrasInfo
                            </li>
                            <li>
                                I donee my Web Development at PrasInfo
                            </li>
                        </ul>
                    </div>
                    <br />
                    <div className='col-sm-12'>
                        <h2 className='myskills'>My Projects</h2>
                        <br />
                        <table className="table table-dark table-striped">
                            <thead>
                                <tr>
                                    <th>Project Domain</th>
                                    <th>Programming Language</th>
                                    <th>Project Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Full Stack Web Development</td>
                                    <td>HTML,CSS,JAVASCRIPT,ANGULAR,TYPESCRIPT,NODE JS</td>
                                    <td>
                                        <a href={''}/>Travel Application
                                    </td>
                                </tr>
                                <tr>
                                    <td>Web Development</td>
                                    <td>HTML,CSS,JAVASCRIPT</td>
                                    <td>
                                        <a href={''}/>E-Commerce Application
                                    </td>
                                </tr>
                                <tr>
                                    <td>Web Development</td>
                                    <td>HTML,CSS,JAVASCRIPT,REACT JS</td>
                                    <td>
                                        <a href={''}/>Portfolio Application
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='col-sm-12'>
                        <h2 className='myskills'>Education Qualification</h2>
                        <br />
                        <table className="table table-dark table-striped">
                            <thead>
                                <tr>
                                    <th>Degree</th>
                                    <th>School/College</th>
                                    <th>Year of Passed Out</th>
                                    <th>Percentage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Bachelors in Information Technology</td>
                                    <td>The American College</td>
                                    <td>
                                        2022
                                    </td>
                                    <td>80%</td>
                                </tr>
                                <tr>
                                    <td>HSLC</td>
                                    <td>Sivakasi Nadar's Matric Hr Secondary School</td>
                                    <td>
                                      2019
                                    </td>
                                    <td>72%</td>
                                </tr>
                                <tr>
                                    <td>SSLC</td>
                                    <td>Sivakasi Nadar's Matric Hr Secondary School</td>
                                    <td>
                                        2017
                                    </td>
                                    <td>85%</td>
                                </tr>
                            </tbody>
                        </table>
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

        </body>
      </div>
    )
  }
}

export default Home;
