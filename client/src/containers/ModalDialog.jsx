import React from 'react'

class ModalDialog extends React.Component {

  render() {
    return (
      <div id="modal-dialog">
        <div id="modal-dialogue-title-bar">
          <h2>Modal Dialog Title</h2>
          <span id="modal-dialog-close-button">X</span>
          <div id="modal-dialog-content">
            { this.props.children }
          </div>
        </div>
      </div>
    )
  }

}

export default ModalDialog
