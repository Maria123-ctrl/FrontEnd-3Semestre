import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav className="links">
                <Link className="link" to="/">Home |</Link>
                <Link className="link" to="/quemsomos"> QuemSomos |</Link>
                <Link className="link" to="/cadfrutas"> Frutas |</Link>
                <Link className="link" to="/produtos"> Produtos</Link>
            </nav>
        </header>
    )
}