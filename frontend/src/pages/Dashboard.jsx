import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

export default function Dashboard(){
  const sample = [ {date:'2025-10-28', revenue:120}, {date:'2025-10-29', revenue:240}, {date:'2025-10-30', revenue:180} ]
  return (
    <div>
      <h2>Sales Dashboard</h2>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={sample}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="revenue" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
