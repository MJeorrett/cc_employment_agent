import React from 'react'
import { Link } from 'react-router'

class TableRow extends React.Component {
  render() {
    const cells = this.props.dataKeys.map( (dataKey, index) => {
      return <td key={ index }>{ this.props.data[dataKey] }</td>
    })
    cells.push(
      <td><Link key="edit-link" to={ "/jobs/" + this.props.data.id }>Edit</Link></td>
    )
    return <tr>{ cells }</tr>
  }

}

export default TableRow
