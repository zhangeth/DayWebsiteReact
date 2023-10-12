import React, { Component } from 'react';

class ArticleUploadForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, e.g., send data to a server
    console.log('Form submitted with input: ' + this.state.inputValue);
  }

  render() {
    return (
      <div className="container">
        <h1>Bootstrap Input Form in React</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="inputField">Input:</label>
            <input
              type="text"
              className="form-control"
              id="inputField"
              value={this.state.inputValue}
              onChange={this.handleChange}
              placeholder="Enter something"
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default ArticleUploadForm;
