const App = () => (
  <div>
    <Person
      age={19}
      name="Paul Smith"
      hobbies={[
        'Walk on the beach',
        'Pet the Dog',
        'Play video games',
        'Watch Movies',
      ]}
    />
    <Person age={17} name="Liz Crews" hobbies={['Reading', 'Playing Bingo']} />
    <Person
      age={50}
      name="Woody Crews"
      hobbies={['Playing Billards', 'Kicking the Dog', 'Dancing']}
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
