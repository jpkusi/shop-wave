import { Component } from 'react'
import ErrorPage from '@components/ErrorPage'

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage error={this.state.error} />
    }

    return this.props.children
  }
}