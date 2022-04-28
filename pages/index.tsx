import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Row from '../components/Row'
import { Profile, Repository } from '../typings'

interface Props {
  profile: Profile
  repositories: Repository[]
}

const Home = ({ profile, repositories }: Props) => {
  return (
    <div className="relative bg-gradient-to-b from-gray-900/10 to-amber-700/10">
      <Head>
        <title>
          {profile?.name || profile?.login || 'Home'} - GITHUB PROJECTS
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header profile={profile} />
      <main className="relative pb-10 pl-4 md:pb-24 lg:pl-16">
        <Banner profile={profile} />
        <section className="space-y-14 md:space-y-20">
          <Row
            title="Repositories"
            repositories={repositories.filter(
              (repo: any) => repo.language !== null
            )}
          />
          <Row
            title="Templates"
            repositories={repositories.filter((repo: any) => repo.is_template)}
          />
          <Row
            title="Others"
            repositories={repositories.filter(
              (repo: any) => repo.language === null
            )}
          />
        </section>
        {/* Modal */}
      </main>
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const BASE_URL = 'http://localhost:3000'
  const [{ profile }, { repositories }] = await Promise.all([
    fetch(BASE_URL + '/api/profile').then((res) => res.json()),
    fetch(BASE_URL + '/api/repositories').then((res) => res.json()),
  ])
  return {
    props: {
      profile,
      repositories,
    },
  }
}
