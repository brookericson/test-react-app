import { useHistory } from "react-router-dom";

const  HouseFilter = ({allHouses}) => {
    const countries = allHouses ? Array.from(new Set(allHouses.map((h) => h.country))) : [];
    countries.unshift(null);
    const history = useHistory();

    const onSearchChange = (e) => {
        const country = e.target.value;
        history.push(`/searchresults/${country}`);
    }

    return (
        <div>
            <div>Look for your dream house in country</div>
            <select onChange={onSearchChange}>
                {countries.map((c) => (
                    <option key={c} value={c}>
                        {c}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default HouseFilter;