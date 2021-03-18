import * as React from "react";

export interface ReactRenderSelfProps {
	delay?: number;
	empty?: boolean;

	onRenderContent?: React.ReactNode | ((self: ReactRenderSelf) => React.ReactNode);
	onRenderDelay?: React.ReactNode | ((self: ReactRenderSelf) => React.ReactNode);
	onRenderEmpty?: React.ReactNode | ((self: ReactRenderSelf) => React.ReactNode);
}

export class ReactRenderSelf extends React.Component<ReactRenderSelfProps> {}