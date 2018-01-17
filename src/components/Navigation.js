import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import signOut from '../actions/user/sign-out'
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import './Navigation.css'


const styles = {
  root: { width: '100%'},
  flex: { flex: 1 },
}

export class Navigation extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool.isRequired,
  }

  signOut(event) {
    event.preventDefault()
    this.props.signOut()
  }

  render() {
    const { signedIn } = this.props
    return (
      <div className="navigation-div">
        <AppBar position="static">
          <Toolbar className="navigation">
            <Link to="/" className="nav-link">
              <Button color="contrast">Home</Button>
            </Link>
            <div className="user-interaction">
              { signedIn ?
                <Button color="contrast" onClick={this.signOut.bind(this)}>Sign Out</Button> :
                <div>
                  <Link to="/sign-in" className="nav-link">
                    <Button color="contrast">Sign in</Button>
                  </Link>
                  <Link to="/sign-up" className="nav-link">
                    <Button color="contrast">Sign up</Button>
                  </Link>
                </div>
              }
            </div>
          </Toolbar>
        </AppBar>
      </div>

      // <nav className="navigation">
      //   <ul>
      //     <li><Link to="/">Home</Link></li>
      //       { signedIn ?
      //         <li><a href="#" onClick={this.signOut.bind(this)}>Sign out</a></li> :
      //         <div>
      //           <li><Link to="/sign-in">Sign in</Link></li>
      //           <li><Link to="/sign-up">Sign up</Link></li>
      //         </div>
      //       }
      //   </ul>
      // </nav>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: (!!currentUser && !!currentUser._id)
})

export default connect(mapStateToProps, { signOut })(withStyles(styles)(Navigation))
