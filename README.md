react-render-self
===========

[![npm version][npm-image]][npm-url] [![license][license-image]][license-url] [![downloads][downloads-image]][downloads-url]

Allows children components update state of parent by ref.
Set property **empty** to hide children and/or render something for empty state.
Or you can set **delay** in msec to render component after delay and/or render something while it wait.

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
        let counter = 1;
        return (
            <>
                <RenderSelf>
                    {'CHILDREN RENDERED'}
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
                    {'CHILDREN RENDERED'}
                </RenderSelf>
                <br />
                <RenderSelf onRenderContent={self => (
                    <div onClick={() => counter++ && self.setState({})}>
                        {`CLICK WILL UPDATE ONLY THIS COMPONENT (counter = ${counter})`}
                    </div>
                )} />
                <br />
                <RenderSelf delay={3000}>
                    {'CHILDREN RENDERED AFTER 3 sec'}
                </RenderSelf>
                <br />
                <RenderSelf delay={3000} onRenderDelay={() => 'PLEASE WAIT...'}>
                    {'CHILDREN RENDERED'}
                </RenderSelf>
                <br />
                <RenderSelf
                    delay={3000}
                    empty
                    onRenderDelay={() => 'FIRST. PLEASE WAIT...'}
                    onRenderEmpty={'SECOND. EMPTY RENDERED'}
                >
                    {'CHILDREN WILL NOT RENDERED'}
                </RenderSelf>
            </>
        );
    }
}

```

## License

[MIT](LICENSE). Copyright (c) 2021 Vitaliy Dyukar.

[npm-image]: https://img.shields.io/npm/v/react-render-self.svg?style=flat-square
[npm-url]: https://npmjs.org/package/react-render-self
[license-image]: https://img.shields.io/npm/l/react-render-self.svg?style=flat-square
[license-url]: https://npmjs.org/package/react-render-self
[downloads-image]: http://img.shields.io/npm/dm/react-render-self.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/react-render-self