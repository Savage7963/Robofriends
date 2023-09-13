import React from 'react';
import CardList from '../components/CardList';
// import { robots } from './robots';
import Scroll from '../components/Scroll'; //creting a component named as scroll 

import SearchBox from '../components/Searchbox';
import './App.css';

// back to previous one when we created the app using npx  

// now app is a class not a function which was like before 
class App extends React.Component{
    constructor(){
        // in constructor we can declare a state
        super();
        this.state={
            // this is a keyword it is not allowed before super() function 
                robots:[], // these are the things that can change and effect our app and usually live in parent component , a component that kind of passes state todifferent component 
                searchfield:'' //what ever entered in input tag 
            }
        
    }

    // Mounting
    // These methods are called in the following order when an instance of a component is being created and inserted into the DOM:
    
    // constructor()
    // static getDerivedStateFromProps()
    // render()
//     // componentDidMount()

//     Updating
//       An update can be caused by changes to props or   state. These methods are called in the following order when a component is being re-rendered:

//      static getDerivedStateFromProps()
//      shouldComponentUpdate()
//      render()
//      getSnapshotBeforeUpdate()
//      componentDidUpdate()

// Unmounting
// This method is called when a component is being removed from the DOM:

// componentWillUnmount()



    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json())
        .then(users=> this.setState({robots:users}));
       
    }

    onSearchChange=(event)=>
    {
        this.setState({searchfield:event.target.value})
        
     
        
    }
    render()
    {
        const {robots,searchfield}= this.state;
        const filteredRobots = robots.filter(robots =>{
            return robots.name.toLowerCase().includes(searchfield.toLowerCase());

        })
        if (!robots.length) {
            return <h1> Loadinggggg............</h1>
        } else{

        
        return (
            <div
            className='tc'
            >
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                {/* // to make the webpage interactive we need search box to communicate with cardlist and list to searchbox for that we will do  one way data flow we will do with STATE*/}
                {/* // now we can access robots with  this.state.robots instead of calling from other file */}

                <Scroll>
                    {/* Scroll isn't a self closing component, it wraps components  
                    "Scroll can use children as a way to render its children , i mean that in Scroll.jsx props has children and if i return props.children then everything will be normal and when i return h1 html element with hi message it returns hi instead of robofrieds list  when i console.log props in Scroll file then it will print object in console and even tough i didnt passed any props to scroll automatically every single component in react has this property  children and this children looks confusing but has cardlist in type so using this.[props.children we can creatwe  components that wrap other components go to scroll.jsx next step " */}
                <CardList robots={filteredRobots}/>
                </Scroll>
                
            </div>
            
        );
    }
    }
    }
  

export default App;