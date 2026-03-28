'use client'
import React from 'react'
import {
    ColumnDef, flexRender,
    getCoreRowModel,
    useReactTable,
    getPaginationRowModel
} from '@tanstack/react-table'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { Button } from "@/components/ui/button"
import { cn } from '@/lib/utils'
import { useTranslation } from "react-i18next";

interface TableProps <TData,Tvalue>{
    columns:ColumnDef<TData,Tvalue>[];
    data:TData[]
}

export default function DataTable<TData, TValue>({
    columns,
    data,
  }: TableProps<TData, TValue>) {
    const { t } = useTranslation();
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel:getPaginationRowModel()
    })
   
    return (
      <div className="rounded-md  text-zinc-600 mt-10 ">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                    const { t } = useTranslation();
                  return (
                    <TableHead key={header.id} className='max-md:text-xs b'>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className={cn(row.index % 2 === 0 ? "" : "bg-[#fcfcfc]",'border-none hover:bg-white')}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className='border-none text-xs max-md:text-[.7rem]'>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-xs text-center">
                  {t('components.noResults')}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        <div className="flex items-center justify-end space-x-4 b mr-5  py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className='bg-gray-100 border-none text-xs disabled:opacity-40 cursor-pointer'
        >
          {t('components.previous')}</Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
           className='bg-gray-100 border-none text-xs disabled:opacity-40 cursor-pointer'
        >
          {t('components.next')}</Button>
      </div>

      </div>
    )
  }