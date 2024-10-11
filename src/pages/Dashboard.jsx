import React from 'react'
import Layout from '../layouts/Layout'
import RevenueAreaChart from '../components/charts/RevenueAreaChart'
import Cards from '../components/dashboard/Cards'

const Dashboard = () => {
  return (
    <Layout>
      <div className='flex flex-col gap-5'>
      <Cards/>
      <RevenueAreaChart/>
      </div>
    </Layout>
  )
}

export default Dashboard