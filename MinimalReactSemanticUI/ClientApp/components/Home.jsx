import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Grid, Button } from 'semantic-ui-react';
import classes from './Home.scss';

export class Home extends React.Component {
    state = { text: "Press semantic ui button first" };

    render() {
        return (
            <Grid className={ classes.home } columns="1">
                <Grid.Row>
                    <Grid.Column>
                        <button onClick={ () => alert(this.state.text) }>scss styled button</button>
                        <Button color="green" onClick={ () => this.setState({ text: "Hello world" }) }>semantic ui button</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}
