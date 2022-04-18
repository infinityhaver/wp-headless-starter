import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';
import './Accordions.scss'

const Accordions = ({ accordionItem }) => {
	
	const { v4: uuidv4 } = require('uuid');
	const uniqueID = uuidv4()

	return (
		<Container>
			<Row>
				<Accordion defaultActiveKey="0">
					{accordionItem.map((item, i, key) => (
						<Accordion.Item eventKey={'accordion-item-' + uniqueID + '-' + i} key={'accordion-item-' + key + uniqueID + '-' + i}>
							<Accordion.Header>
								{item.title}
							</Accordion.Header>
							<Accordion.Body>
								<div className="accordion-content" dangerouslySetInnerHTML={{__html: item.content}} />
							</Accordion.Body>
						</Accordion.Item>
					))}
				</Accordion>
			</Row>
		</Container>
	)
}

export default Accordions