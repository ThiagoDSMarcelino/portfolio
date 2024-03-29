import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const HomePage: React.FC = () => {
	return (
		<Container>
			<Row>
				<Col md={{ span: 8, offset: 1 }}>
					<h5>HEY THERE, I'M</h5>
					<p>
						A Systems Development Apprentice at Bosch enchanted by
						AI and Mathematics <br />I am currently studying the 2st
						semester of Computer Science at{' '}
						<a href='https://tuiuti.edu.br/'>
							UTP - Tuiuti University of Paraná
						</a>
					</p>
				</Col>
			</Row>
		</Container>
	);
};

export default HomePage;
