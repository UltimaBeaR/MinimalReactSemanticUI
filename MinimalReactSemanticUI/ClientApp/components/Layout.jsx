import * as React from 'react';
import { Container } from 'semantic-ui-react';

export class Layout extends React.Component {
    render() {
        return (
            <Container>
                { this.props.children }
            </Container>
        );
    }
}
