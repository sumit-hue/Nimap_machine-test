import React,{Component} from "react";

class Information extends Component{
     constructor(props)
      {
            super(props);
            this.state={
                        html:"Html",
                        css:"Css",
                        javascript:"Javascript",
                        bootstrap:"Bootstrap",
                        nodejs:"Nodejs",
                        reactjs:"Reactjs",
                        }
      };
    render(){
        let val=this.props.selVal;
        if(val===this.state.html){
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12" style={{marginTop:20}}>
                        <h3>Html</h3>  
                        Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.
                         <ul>
                            <li>DOCTYPE html</li>
                            <li>Html</li>
                            <li>Body</li>
                        </ul>
                        </div>
                    </div>
                </div>
               );
           }
           else if(val===this.state.css){
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12" style={{marginTop:20}}>
                        <h3>Css</h3>  
                        CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts.
                        This separation can improve content accessibility, provide more flexibility and control in the specification 
                        of presentation characteristics, enable multiple web pages to share formatting by specifying the relevant CSS 
                        in a separate .css file which reduces complexity and repetition in the structural content as well as enabling the.
                        css file to be cached to improve the page load speed between the pages that share the file and its formatting.
                              <h6>Complications can include:</h6>
                              <ul>
                              <li>Background color</li>
                              <li>Padding</li>
                              <li>Margins</li>
                              <li>Fonts size</li>
                              </ul>
                        </div>
                    </div>
                </div>
               );
           }
           else if(val===this.state.javascript){
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12" style={{marginTop:20}}>
                        <h3>Javascript</h3>  
                        JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.
                          <ul>
                            <li>JavaScript is the world's most popular programming language.</li>
                            <li>JavaScript is the programming language of the Web.</li>
                            <li>JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.</li>
                            <li>While it is most well-known as the scripting language for Web pages, many non-browser environments also use it</li>
                            <li>such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles. Read more about JavaScript..</li>
                          </ul>
                          This section is dedicated to the JavaScript language itself, and not the parts that are specific to Web pages or other host environments. 
                          For information about API specifics to Web pages, please see Web APIs and DOM.                       
                        </div>
                    </div>
                </div>
               );
            }
            else if(val===this.state.bootstrap){
                return(
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12" style={{marginTop:20}}>
                            <h3>Bootstrap</h3> 
                            Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.
                              <ul>
                                <li>Get started with Bootstrap, the world’s most popular framework for building responsive, mobile-first sites, with BootstrapCDN and a template starter page..</li>
                                <li>Looking to quickly add Bootstrap to your project? Use BootstrapCDN, provided for free by the folks at StackPath. Using a package manager or need to download the source files? Head to the downloads page..</li>
                                <li>Many of our components require the use of JavaScript to function. Specifically, they require jQuery, Popper.js, and our own JavaScript plugins. Place the following scripts near the end of your pages, right before the closing body tag, to enable them. jQuery must come first, then Popper.js, and then our JavaScript plugins..</li>
                                <li>Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. </li>
                                <li>Bootstrap is developed mobile first, a strategy in which we optimize code for mobile devices first and then scale up components as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices, add the responsive viewport meta tag.</li>
                             </ul>
                             </div>
                        </div>
                    </div>
                   );
                }
                else if(val===this.state.nodejs){
                    return(
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12" style={{marginTop:20}}>
                                <h3>Nodejs</h3> 
                                Node.js is a free, open-sourced, cross-platform JavaScript run-time environment that lets developers write command line tools and server-side scripts outside of a browser.
                                  <ul>
                                    <li>1).JSON has won:JSON (JavaScript Object Notation) is a practical compound data exchange format. It facilitates the JavaScript developers to build APIs quickly and foster interoperability. Its simplicity can be expressed in just five railroad parse diagrams. </li>
                                    <li>2. JavaScript is everywhere: Everyone knows that JavaScript is object oriented language like C. It is used to develop applications in browser with new framework that emerges periodically so as to encourage developers. It has got internal capability to handle event loop mechanism easily. It runs across several OS environments.</li>
                                    <li>3. Sharing is encouraged: It is easy to share library code packages not only technically and culturally, but also legally and procedurally. Node.js has got Node Package Manager and it has got over 50,000 packages, so that other developer has already got solution to their problem. It binds C libraries like OpenCV and Tesseract open source optical character library.</li>
                                    <li>4. Node package manager works broadly: Node package manager is the root of all deployment systems. It motivates several PaaS providers (platform as a service) for node.js. It makes it easier to move small apps amongst providers. In the recent past, Node ecosystem has grown extremely well because of its simple and dependable package management.</li>
                                    <li>5. Batteries not included minimalism: Node.js apps are broken into little modules which are then composed and shared. All the packages can be scoped and crafted. They can be baked together. This care free nature persuades community to experiment. Also, there happens a bit of overlapping and experimentation. When packages are executed well, they handle one task.</li>
                                    <li>6. Instrumentation: The last, but not the least, you must know about the instrumentation, as it is well instrumented for production. The tools help an app for production readiness and performance. Like any other maturing technology, there are many areas where best practices can be useful along with more tools and documentation. However, Node.js is the best and it is marching ahead for its next release.
                                        Now that you are aware of some of the most important things about Node.js, it is highly advisable for you to keep the above mentioned points in mind before using Node JS and share these points with developers too. Good luck with that!</li>
                                  </ul>
                                  Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node.js uses an event-driven, 
                                  non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.
                                </div>
                            </div>
                        </div>
                       );
                    }
                    else if(val===this.state.reactjs){
                        return(
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12" style={{marginTop:20}}>
                                    <h3>Reactjs</h3>
                                    React is a front-end library developed by Facebook. It is used for handling the view layer for web and mobile apps. ReactJS allows us to create reusable UI components. It is currently one of the most popular JavaScript libraries and has a strong foundation and large community behind it
                                      <ul>
                                        <li>ReactJS is JavaScript library used for building reusable UI components. According to React official documentation, following is the definition −</li>
                                        <li>JSX − JSX is JavaScript syntax extension. It isn't necessary to use JSX in React development, but it is recommended.</li>
                                        <li>Components − React is all about components. You need to think of everything as a component. This will help you maintain the code when working on larger scale projects.</li>
                                        <li>Unidirectional data flow and Flux − React implements one-way data flow which makes it easy to reason about your app. Flux is a pattern that helps keeping your data unidirectional.</li>
                                        <li>License − React is licensed under the Facebook Inc. Documentation is licensed under CC BY 4.0.</li>
                                      </ul>
                                      React Advantages: Uses virtual DOM which is a JavaScript object. This will improve apps performance, since JavaScript virtual DOM is faster than the regular DOM.Can be used on client and server side as well as with other frameworks.Component and data patterns improve readability, which helps to maintain larger apps.
                                      React Limitations: Covers only the view layer of the app, hence you still need to choose other technologies to get a complete tooling set for development.Uses inline templating and JSX, which might seem awkward to some developers.
                                    </div>
                                </div>
                            </div>
                           );
                        }
           else{
               return ""
               }
       }
};
export default Information; 