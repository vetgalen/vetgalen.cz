import React from 'react'
import classNames from 'classnames'
import Img from 'gatsby-image'
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  UncontrolledCarousel,
} from 'reactstrap'

import get from 'lodash/get'
import './style.scss'

export default class News extends React.Component {
  constructor(props) {
    super(props)
    this.state = { activeIndex: 0 }
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.goToIndex = this.goToIndex.bind(this)
    this.onExiting = this.onExiting.bind(this)
    this.onExited = this.onExited.bind(this)

    this.news = this.props.news.edges.map(e => {
      return {
        html: e.node.html,
        image: e.node.frontmatter.image,
        src: e.node.id,
      }
    })

    this.newsImages = {
      novinky: get(this.props.novinky, 'childImageSharp.fixed'),
      vanoce: get(this.props.vanoce, 'childImageSharp.fixed'),
      spici_pes: get(this.props.spici_pes, 'childImageSharp.fixed'),
      baset: get(this.props.baset, 'childImageSharp.fixed'),
      cipovani: get(this.props.cipovani, 'childImageSharp.fixed'),
      rtg_pes: get(this.props.rtg_pes, 'childImageSharp.fixed'),
      cupcake: get(this.props.cupcake, 'childImageSharp.fixed'),
      krabice: get(this.props.krabice, 'childImageSharp.fixed'),
      od_peti: get(this.props.od_peti, 'childImageSharp.fixed'),
      alert: get(this.props.alert, 'childImageSharp.fixed'),
      mask: get(this.props.mask, 'childImageSharp.fixed'),
      zajicek: get(this.props.zajicek, 'childImageSharp.fixed'),
      pes_stanuje: get(this.props.pes_stanuje, 'childImageSharp.fixed'),
    }
  }

  onExiting() {
    this.animating = true
  }

  onExited() {
    this.animating = false
  }

  next() {
    if (this.animating) return
    const nextIndex =
      this.state.activeIndex === this.news.length - 1
        ? 0
        : this.state.activeIndex + 1
    this.setState({ activeIndex: nextIndex })
  }

  previous() {
    if (this.animating) return
    const nextIndex =
      this.state.activeIndex === 0
        ? this.news.length - 1
        : this.state.activeIndex - 1
    this.setState({ activeIndex: nextIndex })
  }

  goToIndex(newIndex) {
    if (this.animating) return
    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    const slideImages = this.news.map(slide => {
      return (
        <CarouselItem
          className="max-width"
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={slide.src}>
          <Img fixed={this.newsImages[slide.image]} />
        </CarouselItem>
      )
    })

    const slides = this.news.map(slide => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={slide.src}>
          <div dangerouslySetInnerHTML={{ __html: slide.html }} />
        </CarouselItem>
      )
    })

    const visibleIndicators = classNames('carousel-indicators', {
      'd-none': this.news === null || this.news.length <= 1,
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
                sm={{ order: 1 }}
                md={{ order: 1, size: 3 }}
                className="text-center min-width">
                <Carousel
                  className="max-width"
                  activeIndex={activeIndex}
                  next={this.next}
                  previous={this.previous}
                  interval={false}
                  slide={false}
                  autoPlay={false}>
                  {/* TODO report this bug, Carousel does not work if only with CarouselItems */}
                  <CarouselIndicators
                    className="d-none"
                    items={this.news}
                    activeIndex={activeIndex}
                    onClickHandler={this.goToIndex}
                  />
                  {slideImages}
                </Carousel>
              </Col>
              <Col
                xs={{ order: 2 }}
                sm={{ order: 2 }}
                md={{ order: 2, size: 9 }}>
                <Carousel
                  activeIndex={activeIndex}
                  next={this.next}
                  previous={this.previous}
                  interval={false}
                  slide={false}>
                  <CarouselIndicators
                    className={visibleIndicators}
                    items={this.news}
                    activeIndex={activeIndex}
                    onClickHandler={this.goToIndex}
                  />
                  {slides}
                  <CarouselControl
                    direction="prev"
                    directionText="Previous"
                    onClickHandler={this.previous}
                  />
                  <CarouselControl
                    direction="next"
                    directionText="Next"
                    onClickHandler={this.next}
                  />
                </Carousel>
              </Col>
            </Row>
          </Container>
        </CardBody>
      </Card>
    )
  }
}
