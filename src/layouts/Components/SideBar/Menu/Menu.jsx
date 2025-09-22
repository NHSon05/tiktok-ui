import PropTypes from "prop-types";

function Menu({children}) {
    return (  
        <nav>
            {children}
        </nav>
    );
}

Menu.PropTypes = {
    children: PropTypes.node.isRequired,
};
export default Menu;

