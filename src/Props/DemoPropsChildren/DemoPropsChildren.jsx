import React, { Component } from 'react'
import ExerciseCarStore from '../ExerciseCarStore/ExerciseCarStore'
import DemoChildren from './DemoChildren'

export default class DemoPropsChildren extends Component {
  render() {
    return (
      <div className='container'>
        <h3>Demo về truyền props children</h3>
        <DemoChildren>
            <p>Hello cybersoft</p>
            <ExerciseCarStore/>
        </DemoChildren>
      </div>
    )
  }
}
