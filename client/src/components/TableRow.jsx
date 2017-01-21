import React from 'react'

class TableRow extends React.Component {

  render() {
    const cells = this.props.dataKeys.map( (dataKey, index) => {
      return <td key={ index }>{ this.props.data[dataKey] }</td>
    })
    return <tr>{ cells }</tr>
  }

}

export default TableRow
