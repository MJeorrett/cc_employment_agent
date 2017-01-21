import React from 'react'

class Table extends React.Component {

  render() {
    const dataKeys = []
    const dataTitles = []
    this.props.columnNamesData.forEach( (columnNameData) => {
      const key = Object.keys( columnNameData )[0]
      const title = columnNameData[key]
      dataKeys.push( key )
      dataTitles.push( title )
    })
    const tableHeadings = dataTitles.map( (dataTitle, index) => {
      return <th key={ index }>{ dataTitle }</th>
    })
    const tableRows = this.props.data.map( (dataRow, index) => {
      const cells = dataKeys.map( (dataKey, index) => {
        return <td key={ index }>{ dataRow[dataKey] }</td>
      })
      return <tr key={ index }>{ cells }</tr>
    })

    return (
      <table>
        <thead>
          <tr>
            { tableHeadings }
          </tr>
        </thead>
        <tbody>
          { tableRows }
        </tbody>
      </table>
    )
  }

}

export default Table
