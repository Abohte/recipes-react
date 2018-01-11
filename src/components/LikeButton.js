// src/components/LikeButton.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import HeartGrey from '../images/heart-grey.svg'
import HeartRed from '../images/heart-red.svg'
import './LikeButton.css'

class LikeButton extends PureComponent {
  static propTypes = {
    liked: PropTypes.bool
  }

  classNames() {
    const { liked } = this.props
    let classes = 'LikeButton'

    if (liked) { classes += ' liked' }

    return classes
  }

  toggleLike() {
    this.props.onChange()
    console.log('[LikeButton]: Like button clicked!')
  }

  render() {
    const { liked } = this.props

    return (
      <p className={ this.classNames() }>
        <button onClick={ this.toggleLike.bind(this) }>
          <img alt="like" className="heart" src={ liked ? HeartRed : HeartGrey } />
          <span className="copy">
            <img alt="like" className="heart" src={ liked ? HeartRed : HeartGrey } />
          </span>
        </button>
        <span className="likes">{ liked ? 'You like this' : null }</span>
      </p>
    )
  }
}

export default LikeButton
