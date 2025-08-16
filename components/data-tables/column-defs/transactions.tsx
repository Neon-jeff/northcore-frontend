import { cn } from '@/lib/utils'
import { Transaction } from '@/services/transactions/types'
import { ColumnDef } from '@tanstack/react-table'
import { ArrowDownCircle, ArrowUpCircle } from 'lucide-react'

export const transactionsColumns: ColumnDef<Transaction>[] = [
    {
        'accessorKey':'currency',
        'header': 'Name',
        'cell': ({ row }) => {
            return (
                <span className='capitalize'>{row.getValue('currency')}</span>
            )
        } 
    },
    {
        'accessorKey': 'amount',
        'header': 'Amount',
        'cell': ({ row }) => {
            return (
                <span>${(row.getValue('amount') as number).toFixed(2)}</span>
            )
        }
    },
    {
        'accessorKey': 'transaction_type',
        'header': 'Type',
        'cell': ({ row }) => {
            const type = row.getValue('transaction_type')
            return (
                <span className={cn('flex text-[.65rem] gap-1 p-2 bg-blue-50 text-blue-600  w-fit px-3 rounded-full',type=='deposit'&&'bg-purple-50 text-purple-600')}>
                    {type === 'deposit' ? <ArrowDownCircle size={15}/> : <ArrowUpCircle size={15}/>} {type === 'deposit' ? 'Credit' : 'Debit'}
                </span>
            )
        }
    },
        {
        'accessorKey': 'status',
        'header': 'Status',
        'cell': ({ row }) => {
            const status = row.getValue('status')
            return (
                <span className={cn('flex text-[.65rem] gap-1 p-2 bg-orange-50 text-orange-600 border border-orange-100 w-fit px-3 rounded-full',status=='active'&&'bg-green-50 border-green-50 text-green-600', status ==='cancelled'&&'bg-red-50 border-red-50 text-red-600')}>
                    {status === 'active' ? 'Active' : status === 'pending' ? 'Pending' : 'Cancelled'}
                </span>
            )
        }
    },
    {
        'accessorKey': 'created_at',
        'header': 'Date',
        'cell': ({ row }) => {
            const date = new Date(row.getValue('created_at'))
            return (
                <span>{date.toLocaleDateString()}</span>
            )
        }
    }
]