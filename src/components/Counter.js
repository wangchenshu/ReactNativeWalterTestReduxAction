import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { onIncrement, onDecrement } from '../reducers/reducers'
import { View, Button, Text } from 'react-native'

class Counter extends React.Component {
	constructor(props) {
		super(props)
		this.incrementIfOdd = this.incrementIfOdd.bind(this)
		this.incrementAsync = this.incrementAsync.bind(this)
	}

	incrementIfOdd() {
		if (this.props.value % 2 !== 0) {
			this.props.onIncrement()
		}
	}

	incrementAsync() {
		setTimeout(this.props.onIncrement, 1000)
	}

	render() {
		return (
			<View>
				<Text>Clicked: {this.props.value} times</Text>
				<Button onPress={this.props.onIncrement} title="+" />
				<Button onPress={this.props.onDecrement} title="-" />
				<Button onPress={this.incrementIfOdd} title="increment if odd" />
				<Button onPress={this.incrementAsync} title="increment async" />
			</View>
		)
	}
}

Counter.propTypes = {
	value: PropTypes.number.isRequired,
	onIncrement: PropTypes.func.isRequired,
	onDecrement: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
	return {
		value: state
	}
}

const mapDispatchToProps = {onIncrement, onDecrement}

Counter = connect(mapStateToProps, mapDispatchToProps)(Counter)
export default Counter