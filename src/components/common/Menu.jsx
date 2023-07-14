import '../../css/menu/menu.css'
import Logo from "../../assets/img/logo.png";
import 'boxicons';

function Menu() {
    return (
        <div className='header'>
            <div className="menu-container">
                <div className="menu-left">
                    <img src={Logo} alt="Logo" className="logo" />
                    <ul className="items-menu">
                        <li className="item-menu" >Inicio</li>
                        <li className="item-menu" >Categoria</li>
                    </ul>
                </div>
                <div className="menu-right">
                    <div className="search-game">
                        <box-icon name='search-alt-2' color='#ffffff'></box-icon>
                        <input type="text" placeholder="Buscar juego" className='search-input'/>
                        
                    </div>
                    <div className="user-conteiner">
                        <a>Registrarse</a>
                        <box-icon name='user' type='solid' color='#ffffff' ></box-icon>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu