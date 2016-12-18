
import React from 'react';

class ItemEditor extends React.Component {
  constructor(props) {
    super(props);
    //this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {}
  }
  componentWillMount() {
    this.setState({id: this.props.id})
  }
  
  componentWillReceiveProps() {
    this.setState({id: this.props.id})
  }
  
  render() {
    return (
      <div>
      <h1>Editor for {this.state.id}</h1>
      </div>
    )
  }
}

export default ItemEditor
