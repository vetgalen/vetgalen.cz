import React from 'react'
import classNames from 'classnames'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
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
} from 'reactstrap'

import './style.scss'

const News = (data) => {

  const items = data.news.edges.map(e => {
    return {
      html: e.node.html,
      image: e.node.frontmatter.image,
      src: e.node.id,
      key: e.node.id,
    }
  })

  const newsImages = {
    novinky: getImage(data.novinky),
    vanoce: getImage(data.vanoce),
    spici_pes: getImage(data.spici_pes),
    baset: getImage(data.baset),
    cipovani: getImage(data.cipovani),
    rtg_pes: getImage(data.rtg_pes),
    cupcake: getImage(data.cupcake),
    krabice: getImage(data.krabice),
    od_peti: getImage(data.od_peti),
    alert: getImage(data.alert),
    mask: getImage(data.mask),
    zajicek: getImage(data.zajicek),
    pes_stanuje: getImage(data.pes_stanuje),
    vanoce_2020: getImage(data.vanoce_2020),
    velikonoce_mops: getImage(data.velikonoce_mops),
    vanoce_2021: getImage(data.vanoce_2021),
  }

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  const next = () => {
    if (animating)
      return
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating)
      return
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = newIndex => {
    if (animating)
      return
    setActiveIndex(newIndex)
  }

  const slides = items.map(item => {
    return (
      <CarouselItem
        className="max-width"
        key={item.key}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <Row>
          <Col
            xs={{ order: 1 }}
            sm={{ order: 1 }}
            md={{ order: 1, size: 3 }}
            className="text-center min-width">
            <GatsbyImage image={newsImages[item.image]} alt={item.image} />
          </Col>
          <Col
            xs={{ order: 2 }}
            sm={{ order: 2 }}
            md={{ order: 2, size: 9 }}>
            <div dangerouslySetInnerHTML={{ __html: item.html }} />
          </Col>
        </Row>
      </CarouselItem>
    );
  });

  return (
    <Card className="border-primary">
      <CardHeader>
        <h2>Novinky</h2>
      </CardHeader>
      <CardBody>
        <Container fluid>
          <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            interval={false}
            slide={false}>
            {slides}
            <Container className="controls">
              <Row>
                <Col>
                  <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  <CarouselControl
                    direction="next"
                    directionText="Starší"
                    onClickHandler={next}
                  />
                  <CarouselControl
                    direction="prev"
                    directionText="Novější"
                    onClickHandler={previous}
                  /></Col>
              </Row>
            </Container>
          </Carousel>
        </Container>
      </CardBody>
    </Card>
  )
}

export default News