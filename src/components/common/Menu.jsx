import Logo from "../../assets/img/logo.png";

function Menu() {
    return (
        <div className="menu-container">
            <div className="menu-left">
                <img src={Logo} alt="Logo" className="logo" />
                <ul className="items-menu">
                    <li className="item-menu" >Inicio</li>
                    <li className="item-menu" >Categoria</li>
                </ul>
            </div>
        </div>
    )
}

export default Menu