import Head from 'next/head'
import Header from '../components/Header'
import Row from '../components/Row'
import { Profile, Repository } from '../typings'

interface Props {
  profile: Profile
  repositories: Repository[]
}

const Projects = ({ profile, repositories }: Props) => {
  return (
    <div className="relative">
      <Head>
        <title>
          {profile?.name || profile?.login || 'Home'} - GITHUB PROJECTS
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header profile={profile} />
      <main className="relative pb-10 pl-4 pt-32 md:pb-24 lg:pl-16">
        {repositories.length > 0 && (
          <section className="space-y-14 md:space-y-20">
            <Row
              title="Repositories"
              repositories={repositories.filter(
                (repo: any) => repo.language !== null
              )}
            />
            <Row
              title="Templates"
              repositories={repositories.filter(
                (repo: any) => repo.is_template
              )}
            />
            <Row
              title="Others"
              repositories={repositories.filter(
                (repo: any) => repo.language === null
              )}
            />
          </section>
        )}
        {/* Modal */}
      </main>
    </div>
  )
}

export default Projects

export const getServerSideProps = async () => {
  const BASE_URL =
    process.env.NODE_ENV !== 'development'
      ? 'https://home1-khaledebdelli.vercel.app'
      : 'http://localhost:3000'
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
