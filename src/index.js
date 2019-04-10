import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class TrampingGearList extends React.Component {
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
        <FilterBar
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

class FilterBar extends React.Component {
  
  constructor(props) {
    super(props)
    this.handleSummerChange = this.handleSummerChange.bind(this)
    this.handleCampingChange = this.handleCampingChange.bind(this)
    this.handleTrampChange = this.handleTrampChange.bind(this)
    this.handleOvernightChange = this.handleOvernightChange.bind(this)
  }
  handleSummerChange(e) {
    this.props.onSummerChange(e.target.checked);
  }

  handleCampingChange(e) {
    this.props.onCampingChange(e.target.checked);
  }

  handleTrampChange(e) {
    this.props.onTrampChange(e.target.checked);
  }

  handleOvernightChange(e) {
    this.props.onOvernightChange(e.target.checked);
  }

  render() {
    return (
      <form className="col-4 borderBox">
        <p>
          <input type="checkbox"
            checked={this.props.summer}
            onChange={this.handleSummerChange} />
          {' '} Summer
         </p>
        <p>
          <input type="checkbox"
            checked={this.props.overnight}
            onChange={this.handleOvernightChange} />
          {' '} Overnight
         </p>
        {this.props.overnight &&
        <p>
          <input type="checkbox"
            checked={this.props.camping}
            onChange={this.handleCampingChange} />
          {' '} Camping
         </p>
        }
        <p>
          <input type="checkbox"
            checked={this.props.tramp}
            onChange={this.handleTrampChange} />
          {' '} Hard tramp
         </p>
      </form>
    )
  }
}

class GearTable extends React.Component {
  render() {
    const summer = this.props.summer
    const camping = this.props.camping
    const tramp = this.props.tramp
    const overnight = this.props.overnight

    const rows = []
    let lastCategory = null

    for (const item of this.props.items) {
      if (item.category !== lastCategory) {
        if (!summer && item.category === 'Summer') {
          continue
        }
        if (!camping && item.category === 'Camping') {
          continue
        }
        if (!tramp && item.category === 'Tramp') {
          continue
        }
        if (!overnight && item.category === 'Overnight') {
          continue
        }
        rows.push(
          <GearCategoryRow
            category={item.category}
            key={item.category}
          />
        )
      }

      rows.push(
        <GearItemRow
          item={item}
          key={item.name}
        />
      )
      lastCategory = item.category
    }
    return (
      <table className="table table-striped table-bordered col-4">
        <tbody>{rows}</tbody>
      </table>
    )
  }
}

class GearCategoryRow extends React.Component {
  render() {
    const category = this.props.category
    return (
      <tr className="font-weight-bold">
        <td>{category}</td>
      </tr>
    )
  }
}

class GearItemRow extends React.Component {
  render() {
    const item = this.props.item
    return (
      <tr>
        <td>{item.name}</td>
      </tr>
    )
  }
}

// const CATEGORIES = [
//   'Clothing',
//   'Sleeping',
//   'Camping',
//   'Summer',
//   'Safety',
// ]
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

ReactDOM.render(
  <TrampingGearList items={ITEMS} />,
  document.getElementById('root')
);