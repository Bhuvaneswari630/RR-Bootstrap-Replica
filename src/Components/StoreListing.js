import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

function StoreListing() {
    return (
        <div>
            <h2>Browse stores in Houston</h2>
            <Container style={{ marginTop: "40px", textAlign: "center" }}>
                <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly" }} >
                    <Col>
                        <Row style={{ marginTop: '20px' }}>
                            <Col xs={2}>
                                <Image src="https://www.instacart.com/image-server/60x60/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png" roundedCircle />
                            </Col>
                            <Col style={{ textAlign: 'left' }}>
                                <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                                <p>Delivery * Pickup</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm="1"></Col>
                    <Col >
                        <Row style={{ marginTop: '20px' }}>
                            <Col xs={2}>
                                <Image src="https://www.instacart.com/image-server/60x60/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/57/dcb4c0e2-2ea9-4362-8d07-b3741b5a8429.png" roundedCircle />
                            </Col>
                            <Col style={{ textAlign: 'left' }}>
                                <h5 style={{ fontWeight: "bold" }}>Publix</h5>
                                <p>Delivery * Pickup</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm="1"></Col>
                    <Col >
                        <Row style={{ marginTop: '20px' }}>
                            <Col xs={2}>
                                <Image src="https://www.instacart.com/image-server/60x60/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/1601/5bc6f201-155b-4d3d-841d-a3272b4afd5e.jpg" roundedCircle />
                            </Col>
                            <Col style={{ textAlign: 'left' }}>
                                <h5 style={{ fontWeight: "bold" }}>Earth Fare Market</h5>
                                <p>Delivery</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly" }} >
                    <Col>
                        <Row style={{ marginTop: '20px' }}>
                            <Col xs={2}>
                                <Image src="https://www.instacart.com/image-server/60x60/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png" roundedCircle />
                            </Col>
                            <Col style={{ textAlign: 'left' }}>
                                <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                                <p>Delivery * Pickup</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm="1"></Col>
                    <Col >
                        <Row style={{ marginTop: '20px' }}>
                            <Col xs={2}>
                                <Image src="https://www.instacart.com/image-server/60x60/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/57/dcb4c0e2-2ea9-4362-8d07-b3741b5a8429.png" roundedCircle />
                            </Col>
                            <Col style={{ textAlign: 'left' }}>
                                <h5 style={{ fontWeight: "bold" }}>Publix</h5>
                                <p>Delivery * Pickup</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm="1"></Col>
                    <Col >
                        <Row style={{ marginTop: '20px' }}>
                            <Col xs={2}>
                                <Image src="https://www.instacart.com/image-server/60x60/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/1601/5bc6f201-155b-4d3d-841d-a3272b4afd5e.jpg" roundedCircle />
                            </Col>
                            <Col style={{ textAlign: 'left' }}>
                                <h5 style={{ fontWeight: "bold" }}>Earth Fare Market</h5>
                                <p>Delivery</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default StoreListing
