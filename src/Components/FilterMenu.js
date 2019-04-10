import React from 'react'

class FilterMenu extends React.Component {
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
      <form className="col-4 border">
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

export default FilterMenu