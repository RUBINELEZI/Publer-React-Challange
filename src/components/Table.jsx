import React from "react";

function Table({ data, columns }) {
  return (
    <div className="resizableTable">
      <table>
        <thead>
          <tr>
            {columns.map((item, index) => (
              <TableHeadItem item={item} key={index} />
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <TableRow
              item={item}
              columns={columns}
              key={index}
              rowIndex={index}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TableHeadItem({ item }) {
  return <th>{item.header}</th>;
}

function TableRow({ item, columns }) {
  return (
    <tr>
      {columns.map((column, index) => {
        return (
          <td key={index}>
            {column.render
              ? column.render(column, item)
              : item[`${column.value}`]}
          </td>
        );
      })}
    </tr>
  );
}

export default Table;
