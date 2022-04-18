import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header'


const Home: NextPage = () => {
  const [project, setProject] = useState({
    title: 'my first project',
    name: 'project 1',
    
  })
  return (
    <div className="relative h-[140vh] bg-gradient-to-b from-gray-700/10 to-[#20358f] lg:h-[140vh]">
      <Head>
        <title>
          {project?.title || project?.name || 'Home'} - Ebdelli Khaled
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      My home portfolio
      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        {/* Banner */}
        <section className="md:space-y-24">
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
        </section>
        {/* Modal */}
      </main>
    </div>
  )
}

export default Home
