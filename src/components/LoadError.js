import React, {PureComponent} from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Snackbar from 'material-ui/Snackbar'

class LoadError extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render () {
    const { loadError, errorMessage } = this.props
    const { open } = this.state

    if (!loadError) return null

    return (
      <div>
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={open && loadError}
          message={errorMessage}
          autoHideDuration={5000}
          onClose={this.handleClose}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ loadError }) => ({
  loadError: (loadError.length === 0 ? false : true),
  errorMessage: loadError
})

export default connect(mapStateToProps)(LoadError)
// export default LoadError
