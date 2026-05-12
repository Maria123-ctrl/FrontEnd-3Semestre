import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav>
                <Link to="/">Home |</Link>
                <Link to="/quemsomos"> QuemSomos |</Link>
                <Link to="/cadfrutas"> Frutas</Link>
            </nav>
        </header>
    )
}