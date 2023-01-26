const App = () => (
  <div>
    <Tweet
      username="vjc"
      name="Van Jason Crews"
      date="11/11/2011"
      message="This is my first tweeet"
    />
    <Tweet
      username="liz"
      name="Liz Crews"
      date="12/12/2012"
      message="This is my first tweeet"
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
