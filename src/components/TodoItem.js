import React ,{Component}from 'react';
import PropTypes from 'prop-types';



class TodoItem extends Component{

getStyle=()=>{
    return{
        backgroundColor:'#4f4f4f',
        padding:'10px',
        marginTop:'10px',
        borderBottom:'1px #ccc dotted',
        width:"95%",
        textDecoration: this.props.todo.completed ? 'line-through':'none'
    }
    } 

    
 

    render(){
        const { id ,title}=this.props.todo;

 return (
     <div  style={this.getStyle()}>
     <p>
         <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}   />{' '}
          {title} 
          <button onClick={this.props.toDel.bind(this,id)} style={btnStyle}>x </button>
          </p>
     </div>
 )
    }

}
TodoItem.propTypes={
    todo:PropTypes.object.isRequired
}
const btnStyle={
    background:'#ff0000',
    color:'#fff',
    border:'none',
    pading :'10px 8px',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right'
}

export default TodoItem;
