import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: 'Charles Okpara',
        bio: 'I am a university student learning coding at GoMyCode',
        imgSrc: 'https://media-los2-1.cdn.whatsapp.net/v/t61.24694-24/349968366_707033508139832_5036399013722424177_n.jpg?ccb=11-4&oh=01_AdRsxM5vrmPqQJanqtUVd52VmQeZuUSije7OqIYlYcBJNg&oe=65B03248&_nc_sid=e6ed6c&_nc_cat=103',
        profession: 'Frontend Developer',
      },
      show: false,
      mountTime: new Date(),
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(this.updateMountTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  updateMountTime = () => {
    this.setState({ mountTime: new Date() });
  };

  toggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    const { person, show, mountTime } = this.state;

    return (
      <div>
        <h1>React State App</h1>
        <button onClick={this.toggleShow}>Toggle Profile</button>

        {show && (
          <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>Profession: {person.profession}</p>
          </div>
        )}

        <p>Component Mount Time: {mountTime.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default App;
