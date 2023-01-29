import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";

const Header = () => {
	return (
		<>
			{['lg'].map((expand) => (
				<Navbar key={expand} bg="light opacity-50" expand={expand}>
					<Container fluid>
						<Navbar.Brand href="/"><img style={ {width: '4em'}}src='/images/efasq2.png' alt='logo efa'/></Navbar.Brand>
						<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
						<Navbar.Offcanvas
							id={`offcanvasNavbar-expand-${expand}`}
							aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
							placement="end"
						>
							<Offcanvas.Header closeButton>
								<Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
									EFA74
								</Offcanvas.Title>
							</Offcanvas.Header>
							<Offcanvas.Body>
								<Nav className="justify-content-end flex-grow-1 pe-3">
									<Link className="nav-link" to="/">Accueil</Link>
									<Link className="nav-link" to="/evenements">Evenements</Link>
									<Link className="nav-link" to="/adhésions">Adherer</Link>
									<Link className="nav-link" to="/lien">Lien</Link>
									<Link className="nav-link" to="/contact">Contact</Link>
								</Nav>
							</Offcanvas.Body>
						</Navbar.Offcanvas>
					</Container>
				</Navbar>
			))}
		</>
	);
};

export default Header;