import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Row from '../components/Row'
import { Profile, Repository } from '../typings'
import requests from '../utils/requests'

interface Props {
  profile: Profile
  repositories: Repository[]
}

const Home = ({ profile, repositories }: Props) => {
  return (
    <div className="relative h-[100vh] bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Head>
        <title>
          {profile?.name || profile?.login || 'Home'} - GITHUB PROJECTS
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header profile={profile} />
      <main className="relative pl-4 pb-24 lg:space-y-10 lg:pl-16">
        <Banner profile={profile} />
        <section className="md:space-y-14">
          <Row
            title="JavaScript"
            repositories={repositories.filter(
              (repo) => repo.language === 'JavaScript'
            )}
          />
          <Row
            title="Python"
            repositories={repositories.filter(
              (repo) => repo.language === 'Python'
            )}
          />
          <Row
            title="Others"
            repositories={repositories.filter((repo) => repo.language === null)}
          />
        </section>
        {/* Modal */}
      </main>
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const [profile, repositories] = await Promise.all([
    fetch(requests.fetchOwnUserProfile, {
      method: 'GET',
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    }).then((res) => res.json()),
    fetch(requests.fetchOwnUserRepos, {
      method: 'GET',
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    }).then((res) => res.json()),
  ])

  return {
    props: {
      profile,
      repositories,
    },
  }
}
