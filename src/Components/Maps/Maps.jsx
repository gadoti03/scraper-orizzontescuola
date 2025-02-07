import React from 'react'
import './Maps.css'

import mail_icon from "../../assets/mail_icon.png"
import phone_icon from "../../assets/phone_icon.png"
import location_icon from "../../assets/location_icon.png"
import work_icon from "../../assets/work_icon.png"

const Maps = () => {
  const rows = [
    ["Lunedì", "9:00 - 13:00", ""],
    ["Martedì", "9:00 - 13:00", "15:30 - 18:00"],
    ["Mercoledì", "9:00 - 13:00", ""],
    ["Giovedì", "9:00 - 13:00", "15:30 - 18:00"],
    ["Venerdì", "9:00 - 13:00", ""],
    ["Sabato", "chiuso", ""],
    ["Domenica", "chiuso", ""],
  ];
  return (
    <div className='maps'>
        <div className='maps-col'>
            <ul>
            <li><img src={location_icon} alt=""/>via Giovanni Leone 3, Tito (PZ)<br/>85050, Italia</li>
            <li><img id='work_icon' src={work_icon} alt=""/><table>
                                                              <tbody>
                                                                {rows.map((row, index) => (
                                                                  <tr key={index}>
                                                                    {row.map((cell, cellIndex) => (
                                                                      <td key={cellIndex}>{cell}</td>))}
                                                                  </tr>))}
                                                              </tbody>
                                                           </table></li>
              <li><img src={mail_icon} alt=""/><a href="mailto:info@tasl.it">info@tasl.it</a></li>
              <li><img src={phone_icon} alt=""/><a href="tel:+39 0971 282212">+39 0971 282212</a></li>
            </ul>
        </div>
        <div className='maps-cart'>
        <iframe width="100%" height="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=TASL%20S.r.l.s.,%20Via%20Giovanni%20Leone,%20Piano%20I%C2%B0,%203,%2085050%20Tito%20PZ+(TASL)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe>
        </div>
    </div>
  )
}

export default Maps