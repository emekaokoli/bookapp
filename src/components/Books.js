import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Books extends Component {
 state = {
   category: ["Currently Reading", "want to reac", "Read"]
 }

  render() {
    return (
      <div>
        {this.state.category}
      </div>
    )
  }
}
 Books.propTypes = {
    prop: PropTypes
  }