import React from 'react';

import {FlatButton,
        Card,
        CardHeader,
        Button,
        Checkbox} from 'material-ui';

export default class Poster extends React.Component {

  shouldFail() {
    return this.refs.shouldFail.isChecked();;
  }

  doPost() {
    console.log('Fetch, then update store..');
  }

  render() {
    return (
      <Card>
      <CardHeader title="API Calling"/>
      <Checkbox label="Fail" ref="shouldFail"/>
      <FlatButton onClick={ () => (this.doPost())}>POST</FlatButton>
      </Card>
    );
  }
}
