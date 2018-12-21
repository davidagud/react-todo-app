class Todo extends React.Component {
  constructor(props){
    super(props);

    this.state = { done: (this.props.done == "true" && props.done),
                   text: props.text };
    this.handleClick = this.handleClick.bind(this);
  }


  toggleState(){
    this.state.done
  }

  handleClick(event){
    this.setState({done: !this.state.done
    })
  }

  render(){

    return (
           <div className="todo">
            <span>
              <input type="checkbox" checked={this.state.done} onClick={this.handleClick}/>
              <input type="text" value={this.state.text}/>
            </span>
           </div>
         );
  }
}

ReactDOM.render(
  <Todo text="Todo 1" done="true" />, document.getElementById('root'));
