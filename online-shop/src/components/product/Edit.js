import React from "react";
import { Editor } from "@tinymce/tinymce-react";

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(content, editor) {
    this.setState({ content });
  }

  handleSubmit(event) {
    alert("Text was submitted: " + this.state.content);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Editor
          apiKey="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc"
          value={this.state.content}
          init={{
            height: 200,
            menubar: false,
          }}
          onEditorChange={this.handleChange}
        />
        <br />
<<<<<<< HEAD
        {/* <input type="submit" value="Submit" /> */}
=======
        <input type="submit" value="Submit" />
>>>>>>> origin/develop
      </form>
    );
  }
}

export default Edit;
