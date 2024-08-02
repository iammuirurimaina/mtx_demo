import React, { Component } from 'react'

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
