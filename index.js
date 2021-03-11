import * as React from "react";

ReactRenderSelf.prototype = Object.create(React.Component.prototype);

export function ReactRenderSelf(props) {
	React.Component.constructor.call(this);

	this.render = function () {
		var children;
		if (props.empty) {
			children = (props.onRenderEmpty && typeof props.onRenderEmpty === 'function')
				? props.onRenderEmpty(this): props.onRenderEmpty;
		} else if (props.onRenderContent) {
			children = (typeof props.onRenderContent === 'function')
				? props.onRenderContent(this) : props.onRenderContent;
		} else {
			children = props.children;
		}
		return React.createElement(React.Fragment, null, children);
	}
}