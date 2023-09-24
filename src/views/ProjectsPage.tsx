import { useEffect, useState } from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import DisplayRepository from '../components/DisplayRepository';
import GitHubService from '../services/GitHubService';
import Repository from '../models/Repository';
import Row from 'react-bootstrap/Row';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { useLoadingContext } from '../contexts/LoadingContext';

const ProjectPages: React.FC = () => {
	const [repos, setRepos] = useState<Repository[]>([]);
	const { setLoading } = useLoadingContext();

	useEffect(() => {
		const getData = async () => {
			try {
				GitHubService.getAllRepos().then((res) => setRepos(res));
			} catch (error) {
				console.error(error);
			}
		};

		setLoading(true);
		getData();
		setLoading(false);
	}, []);

	return (
		<Container>
			<Row className='justify-content-center g-3'>
				{repos.map((repo, index) => (
					<Col md={8}>
						<DisplayRepository repo={repo} key={index} />
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default ProjectPages;
