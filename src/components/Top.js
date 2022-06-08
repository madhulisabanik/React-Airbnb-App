import topImg from "../images/photo-grid.PNG"

export default function Top() {
    return (
        <section className="top--section">
            <img src={topImg} className="top--img" />
            <h1 className="top--header">Online Experiences</h1>
            <p className="top--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}