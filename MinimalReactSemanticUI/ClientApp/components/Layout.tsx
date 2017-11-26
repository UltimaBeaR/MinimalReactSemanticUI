import * as React from 'react';
import { Container } from 'semantic-ui-react';

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {}> {
    public render() {
        return (
            <Container>
                { this.props.children }
            </Container>
        );
    }
}
