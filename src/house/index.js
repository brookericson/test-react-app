import "./house.css";

const House = (props) => {
    console.log(props.house);
    const {house} = props;
    return (
        <div>
            <h5>{house.country}</h5>
            <ul>
                <li>{house.address}</li>
                <li><img src={`/images/${house.photo}.jpeg`} alt="house"></img></li>
                <li>{house.price}</li>
                <li>{house.description}</li>
            </ul>
        </div>
    )
}

export default House;