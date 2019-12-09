import React, { Component } from 'react';
import DataService from '../../api/DataService';

import './Home.css';
class Home extends Component {

  componentDidMount() {
    this.getCSVData();
  }

  getCSVData = async () => {
    const { data } = await DataService.get('/getCSVData')
    console.log(data)
  }

  render() {
    return (
      <div>
        Home
      </div>
    )
  }
}

export default Home ;