import React, { Component } from "react";

//components
import ErrorBoundarySvg from "./ErrorBoundarySvg";

//styles
import errorBoundaryStyles from "./error-boundary.module.scss";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    console.log(errorInfo);
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div className={errorBoundaryStyles.errorMountWrapper}>
          <div className={errorBoundaryStyles.header}>
            <h2>Ashesi Hackers League</h2>
          </div>

          <div className={errorBoundaryStyles.errorMount}>
            <div className={errorBoundaryStyles.errorMountSvg}>
              <ErrorBoundarySvg />
            </div>
            <strong>Oops! Something went wrong, we are fixing it</strong>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
