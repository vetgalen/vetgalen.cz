import React from 'react'
import classNames from 'classnames'
import { Card, CardHeader, CardBody, Container } from 'reactstrap'
import './style.scss'

export default class News extends React.Component {
  constructor(props) {
    super(props)

    this.news = this.props.news.edges.map(e => {
      return e.node.html
    })
  }

  render() {
    const news = this.news

    const newsContent = news.map((content, index) => {
      const classes = classNames('carousel-item', {
        active: index === 0,
      })
      return (
        <div
          key={index}
          className={classes}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )
    })

    const newsIndicators = news.map((_, index) => {
      const classes = classNames({
        active: index === 0,
      })

      return (
        <li
          data-target="#newsCarousel"
          data-slide-to={index}
          key={index}
          className={classes}
        />
      )
    })

    console.log(news.length)

    const visibleIndicators = classNames('carousel-indicators', {
      'd-none': news === null || news.length <= 1,
    })

    const visiblePrevButton = classNames('carousel-control-prev', {
      'd-none': news === null || news.length <= 1,
    })

    const visibleNextButton = classNames('carousel-control-next', {
      'd-none': news === null || news.length <= 1,
    })

    return (
      <Card className="border-primary">
        <CardHeader>
          <h2>Novinky</h2>
        </CardHeader>
        <CardBody>
          <div
            id="newsCarousel"
            className="carousel slide"
            data-interval="false">
            <ol className={visibleIndicators}>{newsIndicators}</ol>
            <Container className="carousel-inner">{newsContent}</Container>
            <a
              className={visiblePrevButton}
              href="#newsCarousel"
              role="button"
              data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Předchozí</span>
            </a>
            <a
              className={visibleNextButton}
              href="#newsCarousel"
              role="button"
              data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Další</span>
            </a>
          </div>
        </CardBody>
      </Card>
    )
  }
}
