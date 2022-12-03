import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'

export default function Projects() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="md:space-y-5 space-y-2 pt-6 pb-8">
          <h1 className="sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
            Resources
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            A collection of interesting reads covering topics discussed in class. Some were
            introduced in class while others were not.
          </p>
        </div>
        <div className="py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
