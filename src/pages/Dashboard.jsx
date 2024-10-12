import React from 'react'
import Layout from '../layouts/Layout'
import RevenueAreaChart from '../components/charts/RevenueAreaChart'
import Cards from '../components/dashboard/Cards'
import EventSales from '../components/dashboard/EventSales'
import TopEventsPerformers from '../components/dashboard/TopEventsPerformers'

const Dashboard = () => {
  return (
    <Layout>
      <div className='flex flex-col gap-5'>
      <Cards/>
      <RevenueAreaChart/>
      <TopEventsPerformers/>
      <EventSales/>
      </div>
    </Layout>
  )
}

export default Dashboard