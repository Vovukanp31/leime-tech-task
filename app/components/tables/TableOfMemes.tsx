"use client";

import { IMeme } from "@/app/interfaces/meme";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
  Button,
} from "@heroui/react";

type TableProps = {
  memes: IMeme[];
  onEdit: (meme: IMeme) => void;
};

const columns = [
  { key: "id", label: "ID" },
  { key: "title", label: "TITLE" },
  { key: "image", label: "IMAGE LINK" },
  { key: "likes", label: "LIKES" },
  { key: "actions", label: "ACTIONS" },
];

const TableOfMemes = ({ memes, onEdit }: TableProps) => {
  const renderCell = (meme: IMeme, columnKey: string) => {
    const cellValue = getKeyValue(meme, columnKey);

    if (columnKey === "actions") {
      return (
        <Button
          fullWidth
          variant="flat"
          color="danger"
          size="md"
          onPress={() => onEdit(meme)}
        >
          Edit
        </Button>
      );
    }

    return cellValue;
  };

  return (
    <Table
      isCompact
      isStriped
      aria-label="Table of memes"
      classNames={{
        th: "text-blue-700 font-bold",
        td: "text-blue-900",
      }}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            className="md:text-md bg-blue-700 py-3 text-xs text-white sm:text-base lg:py-5 lg:text-xl"
            key={column.key}
          >
            {column.label}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={memes}>
        {(meme) => (
          <TableRow key={meme.id}>
            {(columnKey) => (
              <TableCell className="md:text-md max-w-[100px] cursor-default truncate text-xs sm:text-base lg:text-xl">
                {renderCell(meme, String(columnKey))}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default TableOfMemes;
