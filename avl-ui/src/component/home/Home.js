import React, { Component } from 'react';
import DataService from '../../api/DataService';

import './Home.css';
import SearchBar from '../shared/SearchBar';
class Home extends Component {
  state={
    data: [],
    searchedData: []
  }
  componentDidMount() {
    this.getCSVData();
  }

  getCSVData = async () => {
    const { data } = await DataService.get('/getCSVData')
    this.setState({data})
    this.setState({searchedData: data})
  }

  renderList() {
    console.log("called",this.state.searchedData)
    return this.state.searchedData.map( (obj,index) => {
      const name = obj[Object.keys(obj)[0]];
      const time = obj[Object.keys(obj)[1]];
      return this.filterData(time) && (
        <tr key={index} >
          <td data-label="Name">{name}</td>
          <td data-label="Time">{time}</td>
        </tr>
      );
    });
  }

  filterData(time) {
    const currentDay = new Date().getDay();
    const currentTime = new Date().getHours().toString() + new Date().getMinutes().toString();
    let openedTime = '';
    const dayArry = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    openedTime += time.split('/').filter( ele => {
      const indexOfMatchedDay = ele.indexOf(dayArry[currentDay]);
      if(indexOfMatchedDay > -1) {
        const splitBlank = ele.split(" ");
        const timeAM = this.convertTimeInHrs(`${splitBlank[splitBlank.indexOf("am") - 1]} AM`);
        const timePM = this.convertTimeInHrs(`${splitBlank[splitBlank.indexOf("pm") - 1]} PM`);
        if(timeAM && timePM) {
          if(timeAM <= currentTime && currentTime <= timePM) {
            return ele;
          }
        }

      }
    })
    if(openedTime !== '') {
      return true;
    }
    return false;
  }

  onTermSubmit = term => {
    if(term === '') {
      this.setState({ 
        searchedData: this.state.data
      });
      return
    }
    const searchedData = this.state.data.filter(ele => {
      const name = ele[Object.keys(ele)[0]];
      if(name.indexOf(term) > -1) {
        return ele;
      }
    })
    this.setState({ 
      searchedData
    });
  }

  convertTimeInHrs(time) {
    let hours = time.indexOf(":") > -1 ? Number(time.split(":")[0]):Number(time.split(" ")[0]);
    const minutes = time.indexOf(":") > -1 ? Number(time.match(/:(\d+)/)[1]) : 0;
    const AMPM = time.match(/\s(.*)$/)[1];
    if(AMPM === "PM" && hours<12) hours = hours+12;
    if(AMPM === "AM" && hours==12) hours = hours-12;
    let sHours = hours.toString();
    let sMinutes = minutes.toString();
    if(hours<10) sHours = "0" + sHours;
    if(minutes<10) sMinutes = "0" + sMinutes;
    return sHours + sMinutes;
  }

  render() {
    return (
      this.state.data &&
      <div className="ui container ui segment margin-top">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="field">
          <label><h2 class="ui header">List of Open Restaurant</h2></label>
        </div>
        <table className="ui celled table">
          <thead>
            <tr>
              <th>Restaurant Name</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {this.renderList()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Home ;