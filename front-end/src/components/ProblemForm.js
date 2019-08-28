import React from "react";
import { connect } from "react-redux";
import { submitProblem } from "../actions";

class ProblemForm extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      title: ""
    };
  }

  handleChange = e => {
    this.setState({ ...this.state, problem: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    submitProblem(this.state.problem);
    this.setState({
      name: "",
      description: ""
    });
  };

  render() {
    return (
      <>
        <div className="problem-form">
          <h4>Problem Name</h4>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="problem-name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <h4>Problem Description</h4>
            <input
              type="text"
              name="problem-description"
              value={this.state.description}
              onChange={this.handleChange}
            />
            <button>submit</button>
          </form>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSubmitting: state.problemsReducer.isSubmitting,
    problem: state.problemsReducer.problem
  };
};
export default connect(
  mapStateToProps,
  { submitProblem }
)(ProblemForm);
