import House from "../house";

const FeaturedHouse = ({house}) => {
    if (house)
    return (
        <div>
            <h3>Featured House</h3>
            <House house={house}></House>
        </div>
    )
    return <div>No featured house at this time</div>
};

export default FeaturedHouse;