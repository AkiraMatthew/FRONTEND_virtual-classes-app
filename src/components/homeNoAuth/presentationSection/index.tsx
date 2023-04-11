import styles from './styles.module.scss';
import { Container, Row, Col, Button } from 'reactstrap';

const PresentationSection = function () {
    return (
        <>
            <Container>
                <Row>
                    <Col md>
                        <p>UNLIMITED ACCESS</p>
                        <p>
                            Have access to the best <br /> software development tutorials.
                        </p>
                        <p>
                            Study anywhere and anytime, and keep <br />
                            evolving as developer.
                        </p>
                        <Button>
                            ACCESS NOW <img src="/imgs/buttonPlay.svg" alt="button_img" />
                        </Button>
                    </Col>
                    <Col md></Col>
                </Row>
            </Container>
        </>
    );
};

export default PresentationSection;
