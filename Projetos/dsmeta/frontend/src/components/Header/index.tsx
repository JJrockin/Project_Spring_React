import image from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={image} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>Desenvolvido por

                    <a href="https://www.instagram.com/jeronimomoraesf"> @jeronimomoraesf </a>

                </p>
            </div>
        </header>
    )
}

export default Header;