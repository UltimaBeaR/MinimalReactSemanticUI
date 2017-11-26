import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Grid, Label, Button } from 'semantic-ui-react';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return (
            <Grid columns="2">
                <Grid.Row>
                    <Grid.Column>
                        <Label content="Жмакай ->" />
                        <Button color="green" onClick={ this.testOne }>Тест1</Button>
                    </Grid.Column>
                    <Grid.Column>
                        <Button color="red" onClick={ this.testTwo }>Тест2</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }

    testOne() {
        alert("Тест 1");
    }

    testTwo() {
        alert("Тест 2");
    }
}
