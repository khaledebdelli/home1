import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import { Gist, Profile } from '../typings'

interface Props {
  profile: Profile
}

const Home = ({ profile }: Props) => {
  return (
    <div className="relative">
      <Head>
        <title>{profile?.name || profile?.login || 'Home'} - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header profile={profile} />
      <main className="relative pb-10 pt-20 pl-4 md:pb-24 lg:pl-16">
        <Banner profile={profile} />
        {/* Modal */}
      </main>
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const BASE_URL =
    process.env.NODE_ENV !== 'development'
      ? 'https://home1-khaledebdelli.vercel.app'
      : 'http://localhost:3000'
  const { profile } = await fetch(BASE_URL + '/api/profile').then((res) => res.json())
  return {
    props: {
      profile,
    },
  }
}