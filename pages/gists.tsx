import Head from 'next/head'
import Header from '../components/Header'
import Row from '../components/Row'
import { Gist, Profile } from '../typings'

interface Props {
  profile: Profile
  publicGists: Gist[]
  starredGists: Gist[]
}

const Gists = ({ profile, publicGists, starredGists }: Props) => {
  return (
    <div className="relative">
      <Head>
        <title>
          {profile?.name || profile?.login || 'Home'} - GITHUB PROJECTS
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header profile={profile} />
      <main className="relative pb-10 pt-32 pl-4 md:pb-24 lg:pl-16">
        <section className="space-y-14 md:space-y-20">
          {publicGists.length > 0 && (
            <Row title="Public Gists" gists={publicGists} />
          )}
          {starredGists.length > 0 && (
            <Row title="Starred Gists" gists={starredGists} />
          )}
        </section>
        {/* Modal */}
      </main>
    </div>
  )
}

export default Gists

export const getServerSideProps = async () => {
  const BASE_URL =
    process.env.NODE_ENV !== 'development'
      ? 'https://home1-khaledebdelli.vercel.app'
      : 'http://localhost:3000'
  const [{ profile }, { publicGists }, { starredGists }] = await Promise.all([
    fetch(BASE_URL + '/api/profile').then((res) => res.json()),
    fetch(BASE_URL + '/api/gists/public').then((res) => res.json()),
    fetch(BASE_URL + '/api/gists/starred').then((res) => res.json()),
  ])
  return {
    props: {
      profile,
      publicGists,
      starredGists,
    },
  }
}
