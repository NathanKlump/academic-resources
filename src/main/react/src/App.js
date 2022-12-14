import React from 'react';
import AcademicResources from './component/AcademicResources/js/AcademicResources';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <AcademicResources />
      </React.Fragment>
    );
  }
};

export default App;
