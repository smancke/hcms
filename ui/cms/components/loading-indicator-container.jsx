import { connect } from 'react-redux'
import LoadingIndicator from './loading-indicator';

const mapAppState = function(state) {
  let notifications = []
  for (const key in state.notifications) {
    notifications.push(state.notifications[key])
  }
  return { notifications }
}

const mapDispatchToProps =  ({
})

export default connect(
    mapAppState,
    mapDispatchToProps
)(LoadingIndicator)

