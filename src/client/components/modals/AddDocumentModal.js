import React from 'react';
import ReactDOM from 'react-dom';

class AddDocumentModal extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      title: '',
      content: '',
    };

    this.onClickSave = this.onClickSave.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    $(ReactDOM.findDOMNode(this.refs.access)).on('change',this.onChange);
  }

  onChange(event) {
    this.setState({
      [ event.target.name ] : event.target.value
    });
  }

  onClickSave(event) {
    console.log(this.state);
  }


  render() {
    return (
      <div id="addDocumentModal" className="modal">
        <div className="modal-content">
          <div className="center-align">
            <h5 className="blue-color">Add New Document</h5>
            <h6 className="pink-color">
              * Note that all fields are required *
            </h6>
          </div>

          <div className="row">
            <div className="col s12">
              <div className="row modal-form-row">
                <div className="input-field col s12">
                  <input
                    name="title"
                    type="text"
                    onChange={this.onChange}
                    value={this.state.title}
                    className="validate" />
                  <label htmlFor="title">Title</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <select
                    ref="access"
                    name="access"
                    value={this.state.access}
                    onChange={this.onChange}>
                    <option disabled >Select Access</option>
                    <option value="Private">Private</option>
                    <option value="Public">Public</option>
                    <option value="Role">Role</option>
                  </select>
                  <label htmlFor="access">Access Type</label>
                </div>
              </div>
              <div className="input-field col s12">
                <textarea
                  name="content"
                  className="materialize-textarea"
                  onChange={this.onChange}
                  value={this.state.content} />
                <label htmlFor="content">Content</label>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button
            className="btn-large waves-effect waves-light blue-bg"
            type="submit"
            name="action"
            onClick={this.onClickSave} >Add Document</button>
        </div>
      </div>
    );
  }
}

export default AddDocumentModal;