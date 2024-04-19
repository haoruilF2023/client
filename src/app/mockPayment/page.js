'use client'

import { useSearchParams } from 'next/navigation'
import Button from '@mui/material/Button'
import { orderRequester } from '@/utils/requester'

export default function Page() {
    const searchParams = useSearchParams()

    const order_id = searchParams.get('order_id')
    const ticket_id = searchParams.get('ticket_id')
    const price = searchParams.get('price')

    // const

    console.log(searchParams)
    return (
        <div className="page">
            <h1>Mock Payment System</h1>
            <p>This page is intended to repalce 3rd party payment system (Google Pay, Apple Pay...)</p>
            <hr className="my-2" />
            <h2>Please Confirm Your Payment</h2>
            <p>Order ID: {order_id}</p>
            <p>Ticket ID: {ticket_id}</p>
            <p>Price: ${price}</p>
            <div className="my-2" />
            <Button variant="contained" color="primary">
                Pay Now
            </Button>
        </div>
    )
}
