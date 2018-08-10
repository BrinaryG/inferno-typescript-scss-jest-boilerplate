import { Component } from 'inferno';

interface IState {}

interface IProps {}

export class App extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    render(props: IProps, state: IState) {
        return <div>hello world!</div>;
    }
}
