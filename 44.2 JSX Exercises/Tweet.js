const Tweet = (props) => {
  return (
    <div class="alert alert-info">
      <h1>Tweet</h1>
      <h3>
        Username: {props.username}
        <br />
        Name: {props.name}
      </h3>
      <h5>{props.message}</h5>
      <footer>{props.date}</footer>
    </div>
  );
};
