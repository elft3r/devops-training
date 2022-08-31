import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

const FeatureList = [
  {
    title: 'Understand the basics',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        DevOps covers a lot of ground and it can be difficult to find a starting
        point. With these resource you get the basics and links to other
        resources with more information.
      </>
    )
  },
  {
    title: 'Not technology driven',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Technical people always try to argue and focus on technical things.
        Here, I try to put the core concepts into the focus, as the technologies
        change faster than the core concepts.
      </>
    )
  },
  {
    title: 'Hand-on tutorials',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Skill based tutorials to get hands-on experience with DevOps. Depending
        on whether your a developer or from operations you can start applying
        the concepts and strengthen your skills.
      </>
    )
  }
]

function Feature ({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <Svg className={styles.featureSvg} role='img' />
      </div>
      <div className='text--center padding-horiz--md'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures () {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
