import airbnbLogo from "../images/airbnb-logo.png"

export default function Navbar() {
    return (
        <nav className="logo-section">
            <img src={airbnbLogo} className="logo-img" />
        </nav>
    )
}