import React, {Component} from 'react';
import 'whatwg-fetch';
import logo from './logo.svg';
import './App.css';
import {
  Button,
  FormGroup,
  ControlLabel,
  HelpBlock,
  FormControl,
  Row,
  Col
} from 'react-bootstrap';

const AZUREML_URL = 'https://ussouthcentral.services.azureml.net/workspaces/c9d75f957bf54c309caf9d580' +
    '620beb4/services/15eedb04f50a46febd8b8804ffd48ea7/execute?api-version=2.0&format' +
    '=swagger';
const API_KEY = 'gRmL+AtuKnj1GUgAGgpHhIpg9ROJRzfk6WpUwn6eMBxzVt/rGTMWmhpo1vehyN9W68J+OcAR8ZpGNUvW' +
    'ZpS2Ow==';

const styles = {
  padding: 50
};

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prediction: null
    };

    this.FieldGroup = this
      .FieldGroup
      .bind(this);
  }

  handleSubmit() {
    const body = {
      "Inputs": {
        "input1": [
          {
            'LotArea': "1000",
            'YearBuilt': "1999",
            'SalePrice': "0"
          }
        ]
      },
      "GlobalParameters": {}
    };

    fetch(AZUREML_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + API_KEY,
      },
      mode: 'no-cors',
      body: JSON.stringify(body)
    }).then(response => {
      console.log(response);
      this.setState({
        prediction: response.prediction
      }, reject => console.log(reject));
    })
      .catch(function (error) {
        console.log(error);
      });
  }

  FieldGroup({
    id,
    label,
    help,
    ...props
  }) {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props}/> {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    );
  }

  render() {
    return (
      <Row className="show-grid" style={styles}>
        <Col md={6}>
          <form onSubmit={this.handleSubmit}>
            <this.FieldGroup
              id="formControlsHouseArea"
              type="number"
              label="Text"
              placeholder="1000"/>
            <this.FieldGroup
              id="formControlsBuildYear"
              type="number"
              label="Build year"
              placeholder="1989"/>
            <this.FieldGroup
              id="formControlsPrediction"
              type="text"
              label="Prediction"
              disabled={true}
              placeholder=""
              value={this.state.prediction}/>
            <Button type="button" onClick={this.handleSubmit}>
              Submit
            </Button>
          </form>
        </Col>
      </Row>
    );
  }
}

export default Navigation;
