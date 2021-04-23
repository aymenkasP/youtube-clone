import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CategoriesBar from '../COMPONENTS/categories/CategoriesBar'
import Video from '../COMPONENTS/video/Video'
export default function HomeScreen() {
    return (
        <Container>
            <CategoriesBar />
            <Row>
                {
                    [...new Array(20)].map(()=>{
                     return   <Col lg={3} md={4} >
                            <Video />
                            
                              </Col>
                    })
                }
            </Row>
        </Container>
    )
}
