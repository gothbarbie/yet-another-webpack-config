import React from 'react'

import styles from './counter.module.scss'

import dataUrl from './img/rabbit.svg'

class Counter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: props.count || 0,
    }

    this.updateCount = this.updateCount.bind(this)
  }

  updateCount(increment) {
    const { count } = this.state

    if (increment) {
      this.setState({
        count: count + 1,
      })
    } else {
      this.setState({
        count: count - 1,
      })
    }
  }

  render() {
    const { count } = this.state

    return (
      <div className={styles.wrapper}>
        <img src={dataUrl} alt="rabbit" />
        <p>The current count is {count}</p>
        <button onClick={() => this.updateCount(true)}>Increment</button>
        <button onClick={() => this.updateCount(false)}>Decrement</button>
      </div>
    )
  }
}

export default Counter
