import React from 'react'

class Keypad extends React.Component{
  keyClick = () => {
    console.log('Entering password')
  }
  render(){
    return (
      <input type="password" onkeyUp={this.keyClick} />
      )
  }
}
export default Keypad;