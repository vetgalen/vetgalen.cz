import React from 'react'
import classNames from 'classnames'
import Img from 'gatsby-image'
import { Card, CardHeader, CardBody, Container, Row, Col } from 'reactstrap'
import get from 'lodash/get'
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
    const vanoce = get(this.props.vanoce, 'childImageSharp.fixed')

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
          <Container fluid>
            <Row>
              <Col
                xs={{ order: 1 }}
                sm={{ order: 1, size: 3 }}
                className="text-center">
                <Img fixed={vanoce} />
              </Col>
              <Col xs={{ order: 2 }} sm={{ order: 2, size: 9 }}>
                <div
                  id="newsCarousel"
                  className="carousel slide"
                  data-interval="false">
                  <ol className={visibleIndicators}>{newsIndicators}</ol>
                  <Container className="carousel-inner">
                    {newsContent}
                  </Container>
                  <a
                    className={visiblePrevButton}
                    href="#newsCarousel"
                    role="button"
                    data-slide="prev">
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Předchozí</span>
                  </a>
                  <a
                    className={visibleNextButton}
                    href="#newsCarousel"
                    role="button"
                    data-slide="next">
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Další</span>
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </CardBody>
      </Card>
    )
  }
}
