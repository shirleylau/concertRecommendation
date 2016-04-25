import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as main2 from './main2';

const Page = React.createClass({
  displayName: 'Page',
  render: function () {

    const viewOptions = ['Genre', 'Artist', 'Song'];

    interface IProfile {
      user_id: string;
      name: string;
    }

    const me : IProfile = {
      user_id: '1248316555',
      name: 'Shirley'
    };

    const friend : IProfile = {
      "user_id": "12131331278",
      "name": "Willy"
    };

    const peeps = [friend, me];

    return (
      <div>
        <div className="row wrap">
          <h1>HI, FRIEND.</h1>
        </div>
        <div id="header">
          <div className="center">
            <div id="view-control" className="btn-group btn-group-lg" role="group">
              {viewOptions.map(x => <Button label={x} />)}
            </div>
          </div>
        </div>
        <div id="body">
          <div className="section">
            <div id="score" className="center">68</div>
          </div>
          <div className="section wrap">
            <div className="main">
              {
                peeps.map(x => <Profile name={x['name']} />)
              }
            </div>
            <div className="side-panel"></div>
          </div>
        </div>
        <div id="footer"></div>
      </div>
    );
  },
});

const Button = ({label}) => {
  //console.log(label);
  return <button className="btn btn-primary" type="button">{label}</button>
};

const Profile = ({name}) => {
    return <div className="profile">
      <div className="profile-name">{name}</div>
      <div className="profile-image"></div>
      <div className="profile-chart"></div>
    </div>
};

ReactDOM.render(
  <Page />, document.getElementById('page-container')
);

//main2.FUUU();
