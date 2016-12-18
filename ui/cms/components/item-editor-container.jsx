import { connect } from 'react-redux'
import ItemEditor from './item-editor';


const mapAppState = function(state, props) {
  return {
    id: props.params.id
  }
}

const mapDispatchToProps = dispatch => (reducer, props) => ({
})

export default connect(
  mapAppState,
  mapDispatchToProps
)(ItemEditor)

