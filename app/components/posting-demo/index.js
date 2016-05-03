
import React from 'react';

import * as sfApi from '../../lib/sugar-fetch';

import {FlatButton,
        Card,
        CardHeader,
        TextField,
        Button,
        CircularProgress,
        Checkbox} from 'material-ui';

export default class Poster extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  getUri() {
    const path = this.refs.sendUri.getValue();
    return path[0] == '/' && path || '/'+path;
  }

  loading(state) {
    this.setState ({loading: state})
  }

  doPost() {
    this.loading(true);
    let self = this;
    (sfApi.post(`http://httpbin.org${this.getUri()}`, {foo: 'bar'})
          .then ((data) => {
            console.log('JSON echo', data.json);
            self.loading(false);
          }))
  }

  doGet() {
    let self = this;
    (sfApi.get(`http://httpbin.org${this.getUri()}`, {foo: 'bar'})
          .then ((data) => {
            self.loading(false);
          }))
    this.loading(true);
  }

  render() {
    let loadingState;
    if(this.state.loading) {
      loadingState = <CircularProgress
                      mode="indeterminate" color="red" size={0.4}/>

    } else {
      loadingState = <span style={{color: 'green', marginRight: '4px'}}>
        DONE
      </span>
    }
    return (
      <Card>
        <CardHeader title="API Calling"/>
        {loadingState}
        <span>{"http://httpbin.org/ "}</span>
        <TextField ref="sendUri"/>
        <FlatButton onClick={ () => (this.doPost())}>POST</FlatButton>
        <FlatButton onClick={ () => (this.doGet())}>GET</FlatButton>
      </Card>
    );
  }
}
