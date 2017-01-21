import React from 'react'

class ModalDialog extends React.Component {

  constructor() {
    super()
    this.handleCloseClicked = this.handleCloseClicked.bind( this )
  }

  handleCloseClicked() {
    this.props.onCloseClicked()
  }

  render() {
    return (
      <div id="modal-dialog">
        <div id="modal-dialogue-title-bar">
          <h2>{ this.props.title }</h2>
          <div
            id="modal-dialog-close-button"
            onClick={ this.handleCloseClicked }
          >X</div>
        </div>
        <div id="modal-dialog-content">
          { this.props.children }
        </div>
      </div>
    )
  }

}

export default ModalDialog
