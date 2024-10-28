import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
} from "@/components/ui/table";
import React from "react";

interface Column {
  header: string;
  accessor: string;
}

interface TableData {
  columns: Column[];
  rows: Record<string, any>[];
}

const ShadTable: React.FC<TableData> = ({ columns, rows }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((column, index) => (
            <TableCell className="border border-blue-400" key={index}>
              {column.header}
            </TableCell>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {columns.map((column, colIndex) => (
              <TableCell className="border border-blue-400" key={colIndex}>
                {row[column.accessor]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ShadTable;
