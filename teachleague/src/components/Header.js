import { Container, Navbar, NavbarBrand } from "reactstrap";
import vaporwaveTrees from "../app/assets/img/vaporwaveTrees.png";

const Header = () => {
    return (
      <Navbar dark color="primary" sticky="top" expand="md">
        <Container>
          <NavbarBrand href="/">
            <img src={vaporwaveTrees} alt="Teach League Logo" />
          </NavbarBrand>
        </Container>
      </Navbar>
    );
}

export default Header;