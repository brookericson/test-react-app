import { useHistory } from "react-router-dom";

const SearchResults = ({house}) => {
    const history = useHistory();
    const setActive = () => {
        history.push(`/house/${house.id}`);
    };

    return (
        <tr onClick={setActive}>
            <td>{house.address}</td>
            <td>{house.price}</td>
            <td>{house.likes}</td>
        </tr>
    );
}

export default SearchResults;