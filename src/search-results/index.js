import SearchResultsRow from "./search-results-row";
import { useParams } from "react-router-dom";

const SearchResults = ({allHouses}) => {
    const { country } = useParams();
    const filteredHouses = allHouses.filter((h) => h.country === country);
    return (
        <div>
            <h4>Results for {country}:</h4>
            <table>
                <tbody>
                    {filteredHouses.map((h) => (
                        <SearchResultsRow key={h.id} house={h}></SearchResultsRow>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default SearchResults;