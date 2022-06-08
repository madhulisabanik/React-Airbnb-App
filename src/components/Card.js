import starLogo from "../images/star.png"

/* Either we can use the props directly by passing it in the function */
/* export default function Card(props) {
    return (
        <section className="card">
            <img src={props.cardImg} className="card--img" />
            <div className="card--text">
                <img src={starLogo} className="card--star-logo" />
                <span>{props.rating} </span>
                <span className="grey">({props.views}) - {props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </section>
    )
} */

/* Or we can destructure the props to call it more efficiently */
export default function Card({cardImg, rating, views, country, title, price, openSpots}) {

    let badgeText
    if (openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (country === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <section className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../img/${cardImg}`} className="card--img" />
            <div className="card--text">
                <img src={starLogo} className="card--star-logo" />
                <span>{rating} </span>
                <span className="grey">({views}) - {country}</span>
            </div>
            {/* if title prop exists, then show title */}
            {title && <p>{title}</p>}
            <p><span className="bold">From ${price}</span> / person</p>
        </section>
    )
}

/* Destructuring a props

const person = {
    img: "./images/mr-whiskerson.png",
    name: "Mr. Whiskerson",
    phone: "(800) 555-1234",
    email: "mr.whiskaz@catnap.meow"
}

const {img, name} = person
console.log(name)

*/