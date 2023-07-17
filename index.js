// console.log(React);

// const h1 = React.createElement('h1', {}, 'Hello, React!');

const div = document.querySelector('#root');

// ReactDOM.render(h1, div);

// console.dir(h1);



class HeaderComponent extends React.Component {
    render() {
        console.log(this.props);

        const h1 = React.createElement('h1', {}, 'Super Component!');
        const h2 = React.createElement('h2', {title: 'Hi!'}, `Hello, ${this.props.text}`);
        const p = React.createElement('p', {}, 'Super Paragraph');
        const article = React.createElement('article', {}, h1, h2, p);
        return article;
    }
}

const component1 = React.createElement(HeaderComponent, {text: 'React'});
const component2 = React.createElement(HeaderComponent, {text: 'Java Script'})

// ReactDOM.render(component1, div); 
// ReactDOM.render(component2, div);

const parentElement = React.createElement('section', {}, component1, component2);
ReactDOM.render(parentElement, div);



class HelloComponent extends React.Component {
    render() {
        const h1 = React.createElement('h1', {}, `Hello, ${this.props.name}`);
        return h1;
    }
}

const hello = React.createElement(HelloComponent, {name: 'Anna'});
ReactDOM.render(hello, div);



/// STATE

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    increment() {
        // toDo: state.count++
        console.log('CLICK');
        //setState
        this.setState({
            count: this.state.count + 1
        })

    }

    decrement() {
        if(this.state.count > 0) {
            this.setState({
            count: this.state.count - 1
        })} else if(this.state.count <= 0) {
            this.setState({
                count: 0
            })
        }
        
    }

    render() {
        const h2 = React.createElement('h2', {}, this.state.count);
        const buttonMinus = React.createElement('button', {onClick: () => {this.decrement()}}, '-');
        const button = React.createElement('button', {onClick: () => {this.increment()}}, '+');
        // const div = React.createElement('div', {}, h2, button);
        return React.createElement(React.Fragment, {}, h2, buttonMinus, button);
    }
}

const counterComponent = React.createElement(Counter);
ReactDOM.render(counterComponent, div);