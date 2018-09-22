import { Component } from 'inferno';

interface IState {}

interface IProps {}

export function getOne() {
    return 1;
}

export default class App extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    render(props: IProps, state: IState) {
        return <div>hello world!</div>;
    }
}
