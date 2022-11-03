const App = () => (
  <div>
    <FirstComponent />
    <NamedComponent name="Daniel" />
    <Tweet
      username="djordan218"
      name="Daniel"
      date="11/3/22"
      message="Check out this tweet!"
    />
    <Tweet
      username="secondUser"
      name="Not Daniel"
      date="11/3/22"
      message="Check out this second tweet!"
    />
    <Tweet
      username="notSecondOrFirst"
      name="Still Not Daniel"
      date="11/3/22"
      message="Check out this third tweet!"
    />
    <Person
      name="Daniel"
      age={32}
      hobbies={['music', 'watching tv', 'drinking beer']}
    />
    <Person
      name="Brittany"
      age={33}
      hobbies={['watching tv', 'did I say watching tv?']}
    />
    <Person
      name="Conor"
      age={35}
      hobbies={['hunting', 'watching sports', 'drinking beer']}
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

/* <Tweet
username="djordan218"
name="Daniel"
date="11/3/22"
message="Check out this tweet!"
/> */
