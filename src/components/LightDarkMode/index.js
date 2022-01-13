import './index.css'
import {Component} from 'react'

class LightDarkMode extends Component {
  state = {
    mode: true,
  }

  changeMode = () => {
    this.setState(prevState => ({
      mode: !prevState.mode,
    }))
  }

  render() {
    const {mode} = this.state
    const headingClassName = mode ? 'light_heading' : 'dark_heading'
    const containerClassName = mode ? 'dark_container' : 'light_container'
    console.log(mode)
    return (
      <div className="main_container">
        <div className={`container ${containerClassName}`}>
          <h1 className={`heading ${headingClassName}`}>
            Click To Change Mode
          </h1>
          <div className="btn_container">
            <button type="button" className="btn" onClick={this.changeMode}>
              {mode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
