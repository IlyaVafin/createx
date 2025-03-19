import React, { useEffect, useState } from 'react'
import orangeCircle from './../../../assets/images/figures/circle-progress.svg'
import pinkCircle from './../../../assets/images/figures/circle-progress2.svg'
import blueCircle from './../../../assets/images/figures/circle-progress3.svg'
import greenCircle from './../../../assets/images/figures/circle-progress4.svg'
import bgImage from './../../../assets/images/figures/bg.jpg'
import './Figures.css'
import TitleBottom from '../../../components/TitleBottom'
import ButtonOrange from '../../../components/ButtonOrange'

type figuresList = {
  img: string
  title: string
}

type NewsItem = {
  title: string
  description: string
  urlToImage: string
  url: string
}

const figuresList = [
  {
    img: orangeCircle,
    title: 'Totally satisfied clients',
  },
  {
    img: pinkCircle,
    title: 'Years of experience',
  },
  {
    img: blueCircle,
    title: 'Working hours spent',
  },
  {
    img: greenCircle,
    title: 'Succeeded projects',
  },
]

const Figures: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([])


  const getNews = async () => {
    try {
      const response = await fetch(
        'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=136e4112edf047ddb64c07c41d7b09e9'
      )
      const data = await response.json()
      setNews(data.articles || [])
    } catch (error) {
      console.error(error, 'Что-то пошло не так!')
    }
  }


  const getRandomNews = (news: NewsItem[]) => {
		
    const shuffledNews = [...news].sort(() => Math.random() - 0.5)
    return shuffledNews.slice(0, 3)
  }

  useEffect(() => {
    getNews()
  }, [])

 
  const randomNews = getRandomNews(news)

  return (
    <>
      <section className='figures'>
        <img className='figures-bg' src={bgImage} alt='' />
        <h1 className='figures__title title'>Some facts and figures</h1>
        <ul className='figures__list'>
          {figuresList.map((item, index) => (
            <li key={index}>
              <img src={item.img} alt='' />
              <p className='figures__list-title'>{item.title}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className='news'>
        <div className='container'>
          <h1 className='news__title title'>Recent news</h1>
          <article className='news__wrapper-cards'>
            {randomNews.map((item, index) => (
              <div key={index} className='news__card'>
                {item.urlToImage && (
                  <img loading='lazy' src={item.urlToImage} alt='' />
                )}
                <div className='news__card-text'>
                  <a href={item.url} className='news__card-title'>
                    {item.title}
                  </a>
                  <p className='news__card-desc'>{item.description}</p>
                </div>
              </div>
            ))}
          </article>

          <article className='news__bottom'>
            <TitleBottom>Explore all our news posts </TitleBottom>
            <ButtonOrange width='13.25rem' height='3.25rem'>
              View all news
            </ButtonOrange>
          </article>
        </div>
      </section>
    </>
  )
}

export default Figures
