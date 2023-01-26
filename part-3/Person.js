const Person = (props) => {
  let vote = 'Please go vote!';
  if (props.age < 18) {
    vote = 'You must be 18.';
  }
  let personName = props.name;
  const nameLength = personName.length;
  if (nameLength >= 6) {
    personName = props.name.slice(0, 6);
  }
  function getHobbies() {
    let hobbyList = [];
    props.hobbies.map((h) => {
      hobbyList.push(<li>{h}</li>);
    });
    return hobbyList;
  }

  return (
    <div>
      <p>Learn some information about this person</p>
      <p>
        {personName} - {props.age}
      </p>
      <ul>{getHobbies()}</ul>
      <h3>{vote}</h3>
    </div>
  );
};
