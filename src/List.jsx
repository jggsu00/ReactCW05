import React, { Component } from "react";  

class List extends Component {   
    render() {     
        return (       
            <div>         
                <h2>List</h2>         
                <ul>           
                    {this.props.items.map((item) => (             
                        <li key={item.name}>{item.name}</li>          
                    ))}         
                </ul>       
            </div>     
        );   
    } 
} 

export default List;