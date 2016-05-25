import React from 'react';

export default class SemanticUIDummy extends React.Component {
  render() {
    return (
      <div className="ui card">
        <label style={{"background": "lightgray",
                       "marginBottom": "3px",
                       "fontWeight": "bold"}}>
          Semantic UI Form example
        </label>
        <form className="ui form">
          <div className="field">
            <label>Sample Label</label>
            <input type="text" name="first-name" placeholder="Sample Field" />
          </div>
          <div className="field">
            <div className="ui checkbox">
              <input type="checkbox" tabIndex="0" className="hidden" />
              <label>A Checkbox Label</label>
            </div>
          </div>
          <button className="ui button">A Button</button>
          <button className="ui button">Another Button</button>
        </form>
      </div>
    );
  }
}
