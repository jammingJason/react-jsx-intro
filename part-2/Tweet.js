const Tweet = (props) => {
  return (
    <div>
      🔥🔥🔥🔥🔥🔥🔥🔥🔥
      <p>
        <h4 class="greenWords">username :</h4> {props.username}
      </p>
      <p>
        <h4 class="greenWords">name : </h4>
        {props.name}
      </p>
      <p>
        <h4 class="greenWords">date : </h4>
        {props.date}
      </p>
      <p>
        <h4 class="greenWords">message : </h4>
        {props.message}
      </p>
      🔥🔥🔥🔥🔥🔥🔥🔥🔥
    </div>
  );
};
