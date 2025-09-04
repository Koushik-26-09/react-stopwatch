// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    isTimerRunning: false,
    timeElapsedInSeconds: 0,
  }

  incrementTime = () => {
    this.setState(prev => ({
      timeElapsedInSeconds: prev.timeElapsedInSeconds + 1,
    }))
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  startTimer = () => {
    this.timerId = setInterval(this.incrementTime, 1000)
    this.setState({isTimerRunning: true})
  }

  stopTimer = () => {
    clearInterval(this.timerId)
    this.setState({isTimerRunning: false})
  }

  resetTimer = () => {
    clearInterval(this.timerId)
    this.setState({isTimerRunning: false, timeElapsedInSeconds: 0})
  }

  getFormatTime = () => {
    const {timeElapsedInSeconds} = this.state
    const mins = Math.floor(timeElapsedInSeconds / 60)
    const secs = Math.floor(timeElapsedInSeconds % 60)

    const minutes = String(mins).padStart(2, '0')
    const seconds = String(secs).padStart(2, '0')
    return `${minutes}:${seconds}`
  }

  render() {
    const {isTimerRunning} = this.state
    const time = this.getFormatTime()
    return (
      <div className="bg-container">
        <h1 className="header">Stopwatch</h1>
        <div className="card-container">
          <div className="card-container-header">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p className="timer-header">Timer</p>
            <h1 className="timer-display">{time}</h1>
            <div className="button-container">
              <button
                className="button start-button"
                type="button"
                onClick={this.startTimer}
                disabled={isTimerRunning}
              >
                Start
              </button>
              <button
                className="button stop-button"
                type="button"
                onClick={this.stopTimer}
              >
                Stop
              </button>
              <button
                className="button reset-button"
                type="button"
                onClick={this.resetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
        <div className="footer">
          <p>Designed by Koushik</p>
          <a
            href="https://github.com/Koushik-26-09"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/koushik26"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    )
  }
}

export default Stopwatch
