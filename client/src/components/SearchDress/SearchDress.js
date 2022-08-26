import { React, useState, useEffect } from "react";
import ".././DressForm/DressForm.scss";

const SearchDress = (props) => {

    const [dress, setDress] = useState([])
    useEffect(() => {
        getAllDresses()
    }, [])

    const getAllDresses = () => {
        axios
            .get('http://localhost:8080/dress')
            .then(response => {
                setDress(response.data)

            })
            .catch(error => console.log(error))
    }

    const [search, setNewSearch] = useState("");

    const handleSearchChange = (e) => {
        setNewSearch(e.target.value);
    };

    const filtered = !search
        ? dress
        : dress.filter((item) =>
            item.dressname.toLowerCase().includes(search.toLowerCase())
        );

    return (
        <>
            <div className="search-dress">
                <div className="search-dress-container">
                    <div className="row">
                        <div className="col-sm-12 m-auto">
                            <form action="search" method="post" className="dress-form" className="form-row justify-content-center">
                                <div className="form-group mr-2">
                                    <select className="dress-form-input" name="section" id="section">
                                        <option selected value="x" disabled>Choose Category</option>
                                        <option value="A-line">A-line</option>
                                        <option value="Ballgown">Ballgown</option>
                                        <option value="Short">Short</option>
                                        <option value="Mermaid">Mermaid</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <input className="dress-form-input" type="text" name="dress"
                                        placeholder="Search Dress" value={search} onChange={handleSearchChange}> </input>
                                    {filtered.map((item) => {
                                        return (
                                     <p key={item.id}>
                                     {item.dressname}
                                     </p>
                                    <img
                                    src={item.image}
                                     alt={item.dressname}
                                    loading="lazy"
                                     style={{ cursor: 'pointer' }}/>
                                        )
                                    })}
                                </div>
                                <div class="form-group">
                                    <button
                                        type="submit"
                                        onClick={SortDress}
                                        value="submit"
                                        className="dress-form-button">&emsp;SEARCH&emsp;</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default SearchDress;