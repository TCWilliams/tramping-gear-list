import React from 'react'
import FilterMenu from './FilterMenu.js'
import GearTable from './GearTable.js'

const ITEMS = [
  {
    name: 'Boots',
    category: 'Clothing'
  },
  {
    name: 'Raincoat',
    category: 'Clothing'
  },
  {
    name: 'Sleeping bag',
    category: 'Overnight'
  },
  {
    name: 'Pillow',
    category: 'Overnight'
  },
  {
    name: 'Sleeping bag liner',
    category: 'Overnight'
  },
  {
    name: 'Tent',
    category: 'Camping'
  },
  {
    name: 'Bedroll',
    category: 'Camping'
  },
  {
    name: 'PLB',
    category: 'Tramp'
  },
  {
    name: 'First aid kit',
    category: 'Tramp'
  },
  {
    name: 'Walking poles',
    category: 'Tramp'
  },
  {
    name: 'Togs',
    category: 'Summer'
  },
  {
    name: 'Towel',
    category: 'Summer'
  }
]


class TrampingList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      summer: false,
      camping: false,
      tramp: false,
      overnight: false,
    }

    this.handleSummerChange = this.handleSummerChange.bind(this)
    this.handleCampingChange = this.handleCampingChange.bind(this)
    this.handleTrampChange = this.handleTrampChange.bind(this)
    this.handleOvernightChange = this.handleOvernightChange.bind(this)
  }

  handleSummerChange(summer) {
    this.setState({
      summer
    })
  }
  handleCampingChange(camping) {
    this.setState({
      camping
    })
  }
  handleTrampChange(tramp) {
    this.setState({
      tramp
    })
  }
  handleOvernightChange(overnight) {
    this.setState({
      overnight
    })
  }

  render() {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center">
        <FilterMenu
          summer={this.state.summer}
          camping={this.state.camping}
          tramp={this.state.tramp}
          overnight={this.state.overnight}
          onSummerChange={this.handleSummerChange}
          onCampingChange={this.handleCampingChange}
          onTrampChange={this.handleTrampChange}
          onOvernightChange={this.handleOvernightChange} />
        <GearTable
          items={this.props.items}
          summer={this.state.summer}
          camping={this.state.camping}
          tramp={this.state.tramp}
          overnight={this.state.overnight} />
      </div>
    )
  }
}


export default TrampingList