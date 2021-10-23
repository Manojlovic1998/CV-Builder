import {Container} from 'react-bootstrap';

const Main = (props) => {
    return (
        <main>
            <Container fluid={'lg'}>
                {props.children}
            </Container>
        </main>)
}

export default Main;