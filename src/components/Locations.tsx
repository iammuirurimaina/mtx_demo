import React, { Component } from 'react'
import LocationManagement from './Locations/LocationManagment'
import LocationTable from './Locations/LocationTable'
import SearchSection from './Locations/SearchSection'

export default class Locations extends Component {
  render() {
    return (
      <div>
        <SearchSection />
        <LocationTable />
      </div>
    )
  }
}
