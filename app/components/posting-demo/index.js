import React from 'react';

import * as sfApi from '../../lib/sugar-fetch';

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
    sfApi.post('http://httpbin.org/post', {foo: 'bar'})
         .then ((data) => {
           console.log('JSON echo', data.json);
         })
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
