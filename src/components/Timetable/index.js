import React from 'react'
import classNames from 'classnames'
import './style.scss'

const Timetable = ({ compact }) => {
  const tableStyle = classNames('table', 'table-hover', {
    'table-borderless': compact,
    compact: compact,
    'table-sm': compact,
  })

  const captionStyle = classNames({
    compact: compact,
  })

  return (
    <table className={tableStyle}>
      <caption className={captionStyle}>Ordinační hodiny</caption>
      <tbody>
        <tr>
          <th scope="row">Po</th>
          <td>09:00&nbsp;-&nbsp;12:00</td>
          <td>15:00&nbsp;-&nbsp;18:00</td>
        </tr>
        <tr>
          <th scope="row">Út</th>
          <td>operace</td>
          <td>15:00&nbsp;-&nbsp;18:00</td>
        </tr>
        <tr>
          <th scope="row">St</th>
          <td />
          <td>13:00&nbsp;-&nbsp;19:00</td>
        </tr>
        <tr>
          <th scope="row">Čt</th>
          <td colSpan="2">09:00&nbsp;-&nbsp;16:00</td>
        </tr>
        <tr>
          <th scope="row">Pá</th>
          <td colSpan="2">09:00&nbsp;-&nbsp;15:00</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Timetable
