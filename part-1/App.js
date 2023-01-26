const App = () => (
  <div>
    <FirstComponent />
    <NamedComponent name="Bill" />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
