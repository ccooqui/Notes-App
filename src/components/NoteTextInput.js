import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class NoteTextInput extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newNote: PropTypes.bool
  };

  state = {
    text: this.props.text || ''
  };

  handleSubmit = e => {
    e.preventDefault();
    const text = this.state.text;

    this.props.onSave(text);
    if (this.props.newNote) {
      this.setState({ text: '' })
    }
  };

  handleChange = e => {
    this.setState({ text: e.target.value })
  };

  handleBlur = e => {
    if(!this.props.newNote) {
      this.props.onSave(e.target.value)
    }
  };

  render() {
    if (this.props.newNote) {
      return (
          <form>
            <textarea className={
              classnames({
                edit: this.props.editing,
                'new-note': this.props.newNote
              })}
                      type="text"
                      placeholder={this.props.placeholder}
                      autoFocus={true}
                      value={this.state.text}
                      onBlur={this.handleBlur}
                      onChange={this.handleChange}

            />
            <button className="add-btn" type="button" onClick={this.handleSubmit}>Add Note</button>
          </form>
    )
    } else {
      return (
          <form>
            <textarea className={
              classnames({
                edit: this.props.editing,
                'new-note': this.props.newNote
              })}
                      type="text"
                      placeholder={this.props.placeholder}
                      autoFocus={true}
                      value={this.state.text}
                      onBlur={this.handleBlur}
                      onChange={this.handleChange}

            />
            <button className="send-edit-btn" type="button" onClick={this.handleChange}>Edit Note</button>
          </form>
      )
    }

  }
}
