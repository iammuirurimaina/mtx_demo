import React, { Component } from 'react'
import ConsumptionStats from './Trends/ConsumptionStats'
import ConsumptionChart from './Trends/ConsumptionChart';
import ConsumptionByCylinders from './Trends/ConsumptionbyCylinders';

export default class Trends extends Component {

  render() {
    const consumptionData = {
      stats: [
        {
          title: "By time period",
          value: "234 kg",
          subtitle: "Friday 2-3 PM"
        },
        {
          title: "By day of the week",
          value: "470 kg",
          subtitle: "Friday"
        },
        {
          title: "By date of the month",
          value: "467 kg",
          subtitle: "25th Each Month"
        },
        {
          title: "By month",
          value: "1.21 tons",
          subtitle: "May"
        }
      ]
    };
    
    return (
      <div className="flex flex-col items-center">
        <ConsumptionStats {...consumptionData} />
        <ConsumptionChart />
        <ConsumptionByCylinders />
      </div>
    )
  }
}
