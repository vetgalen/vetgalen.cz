import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { StaticQuery, graphql } from 'gatsby'
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

const News = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          news: allMarkdownRemark(sort: {order: DESC, fields: fileAbsolutePath}) {
            edges {
              node {
                html
                frontmatter {
                  image
                }
                id
              }
            }
          }
          novinky: file(name: {eq: "novinky"}) {
            childImageSharp {
              gatsbyImageData(width: 112, height: 193, placeholder: NONE, layout: FIXED)
            }
          }
          vanoce: file(name: {eq: "vanoce"}) {
            childImageSharp {
              gatsbyImageData(width: 135, height: 134, placeholder: NONE, layout: FIXED)
            }
          }
          spici_pes: file(name: {eq: "spici_pes"}) {
            childImageSharp {
              gatsbyImageData(width: 133, height: 97, placeholder: NONE, layout: FIXED)
            }
          }
          baset: file(name: {eq: "baset_zavreno"}) {
            childImageSharp {
              gatsbyImageData(width: 110, height: 138, placeholder: NONE, layout: FIXED)
            }
          }
          cipovani: file(name: {eq: "cipovani"}) {
            childImageSharp {
              gatsbyImageData(width: 131, height: 137, placeholder: NONE, layout: FIXED)
            }
          }
          rtg_pes: file(name: {eq: "rtg_pes"}) {
            childImageSharp {
              gatsbyImageData(width: 133, height: 108, placeholder: NONE, layout: FIXED)
            }
          }
          cupcake: file(name: {eq: "cupcake"}) {
            childImageSharp {
              gatsbyImageData(width: 115, height: 175, placeholder: NONE, layout: FIXED)
            }
          }
          krabice: file(name: {eq: "krabice"}) {
            childImageSharp {
              gatsbyImageData(width: 162, height: 120, placeholder: NONE, layout: FIXED)
            }
          }
          od_peti: file(name: {eq: "od_peti"}) {
            childImageSharp {
              gatsbyImageData(width: 140, height: 202, placeholder: NONE, layout: FIXED)
            }
          }
          alert: file(name: {eq: "alert"}) {
            childImageSharp {
              gatsbyImageData(width: 119, height: 247, placeholder: NONE, layout: FIXED)
            }
          }
          mask: file(name: {eq: "mask"}) {
            childImageSharp {
              gatsbyImageData(width: 210, height: 150, placeholder: NONE, layout: FIXED)
            }
          }
          zajicek: file(name: {eq: "zajicek"}) {
            childImageSharp {
              gatsbyImageData(width: 115, height: 181, placeholder: NONE, layout: FIXED)
            }
          }
          pes_stanuje: file(name: {eq: "pes_stanuje"}) {
            childImageSharp {
              gatsbyImageData(width: 166, height: 101, placeholder: NONE, layout: FIXED)
            }
          }
          vanoce_2020: file(name: {eq: "vanoce_2020"}) {
            childImageSharp {
              gatsbyImageData(width: 174, height: 128, placeholder: NONE, layout: FIXED)
            }
          }
          velikonoce_mops: file(name: {eq: "velikonoce_mops"}) {
            childImageSharp {
              gatsbyImageData(width: 142, height: 157, placeholder: NONE, layout: FIXED)
            }
          }
          vanoce_2021: file(name: {eq: "vanoce_2021"}) {
            childImageSharp {
              gatsbyImageData(width: 152, height: 96, placeholder: NONE, layout: FIXED)
            }
          }
        }
      `}
      render={(data) => {
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
          )
        })

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
                        />
                      </Col>
                    </Row>
                  </Container>
                </Carousel>
              </Container>
            </CardBody>
          </Card>
        )
      }}
    />
  )
}

export default News