react-render-self
===========

[![Version](http://img.shields.io/npm/v/react-render-self.svg)](https://www.npmjs.org/package/react-render-self)

Allows children components update state of parent by ref.
Or you can set property **empty** to hide children and/or render component for empty state.

Install with [npm](https://www.npmjs.com/):

npm:
```sh
npm install react-render-self --save
```

### How to use

```tsx
import * as React from "react";
import {ReactRenderSelf as RenderSelf} from "react-render-self";

class Main extends React.Component {
	render(): React.ReactNode {
	    const counter = 1;
		return (
			<>
				<RenderSelf>
					{'CHILDREN ARE RENDERED'}
				</RenderSelf>
				<br />
				<RenderSelf empty>
					{'CHILDREN WILL NOT RENDERED'}
				</RenderSelf>
				<br />
				<RenderSelf empty onRenderEmpty={'EMPTY RENDERED'}>
					{'CHILDREN WILL NOT RENDERED'}
				</RenderSelf>
				<br />
				<RenderSelf onRenderContent={'CUSTOM CONTENT'}>
					{'CHILDREN WILL NOT RENDERED'}
				</RenderSelf>
				<br />
				<RenderSelf onRenderContent={self => <>{'CUSTOM CONTENT + '}{self.props.children}</>}>
					{'CHILDREN ARE RENDERED'}
				</RenderSelf>
				<br />
				<RenderSelf onRenderContent={self => (
					<div onClick={() => counter++ && self.setState({})}>
						{`CLICK WILL UPDATE ONLY THIS COMPONENT (counter = ${counter})`}
					</div>
				)} />
			</>
		);
	}
}

```

## License

[MIT](LICENSE). Copyright (c) 2021 Vitaliy Dyukar.
