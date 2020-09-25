import React from 'react';
import { ReactComponent as PlusIcon } from '../icons/plus.svg';

function Table({ tableData, headingColumns }) {
  const data = tableData.map((row, index) => {
    let rowData = [];
    let i = 0;
    for (const key in row) {
      rowData.push({
        key: headingColumns[i],
        val: row[key]
      });
      i++;
    }
    return (
      <tr key={index}>
        <td className="checbox-input">
          <input type="checkbox"></input>
        </td>
        {rowData.map((data, index) => (
          <td key={index}>
            <span style={{ fontWeight: 600 }}>{data.val}</span>
          </td>
        ))}
      </tr>
    );
  });

  return (
    <div className="table-container">
      <table className="contacts-table">
        <thead>
          <tr>
            <th>
              <div className="add-contacts-icon">
                <PlusIcon />
              </div>
            </th>
            {headingColumns.map((col, index) => (
              <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>{data}</tbody>
      </table>
    </div>
  );
}

export default Table;
