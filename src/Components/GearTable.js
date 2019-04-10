import React from 'react'

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
        if ((!camping || !overnight) && item.category === 'Camping') {
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

export default GearTable