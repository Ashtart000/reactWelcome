// console.log(React);

const h1 = React.createElement('h1', {}, 'Hello, React!');

const div = document.querySelector('#root');

ReactDOM.render(h1, div);

console.dir(h1);