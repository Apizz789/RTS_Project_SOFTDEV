class App extends React.Component {

    render() {

        var elems = Array(~~(this.props.number)).fill(0).map(() => <div>test</div>);

        console.log(elems); //(5) [Object,Object,Object,Object,Object]

        return (
            { elems }
        )
    }
}

ReactDOM.render(<App number='5' />, document.querySelector('#app'))