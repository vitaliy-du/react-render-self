import * as React from "react";

ReactRenderSelf.prototype = Object.create(React.Component.prototype);

export function ReactRenderSelf(props) {
	React.Component.constructor.call(this);

	var timer;

	this.state = {
		wait: props.delay !== undefined
	};

	this.componentDidMount = function () {
		if (this.state.wait) {
			timer = window.setTimeout(() => this.setState({wait: false}), props.delay || 0);
		}
	}

	this.componentWillUnmount = function () {
		timer && window.clearTimeout(timer);
	}

	this.render = function () {
		var children;
		if (this.state.wait) {
			children = (props.onRenderDelay && typeof props.onRenderDelay === 'function')
				? props.onRenderDelay(this) : props.onRenderDelay;
		} else if (props.empty) {
			children = (props.onRenderEmpty && typeof props.onRenderEmpty === 'function')
				? props.onRenderEmpty(this) : props.onRenderEmpty;
		} else if (props.onRenderContent) {
			children = (typeof props.onRenderContent === 'function')
				? props.onRenderContent(this) : props.onRenderContent;
		} else {
			children = props.children;
		}
		return React.createElement(React.Fragment, null, children);
	}
}