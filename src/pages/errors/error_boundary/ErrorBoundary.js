import React, { Component } from 'react'
import styles from "./ErrorBoundary.module.css"

export class ErrorBoundary extends Component {  
    constructor(props) {  
      super(props);  
      this.state = { error: null, errorInfo: null };  
    }  
      
    componentDidCatch(error, errorInfo) {  
      this.setState({  
        error: error,  
        errorInfo: errorInfo  
      })  
      console.log(errorInfo)
    }  

    render() {  
      if (this.state.errorInfo) {  
        return (  
          <div className={styles.errorBoundary}>  
            <h3>Oops! Something went wrong !!!</h3>  
            <section>  
                {this.state.error && this.state.error.toString()}  
              <div>
                {this.state.errorInfo.componentStack}  
              </div>
            </section>  
          </div>  
        );  
      }  
      return this.props.children;  
    }    
  }  

