import { ReactComponent as GithubIcon } from 'assets/img/GitHub.svg';
import './styles.css';

function Navbar() {
   
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/Hugo3120">
                        <div>
                            <GithubIcon />
                            <p>/devsuperior</p>
                        </div>

                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;