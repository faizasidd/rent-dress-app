import { React, useState, useEffect } from "react";
import ".././DressForm/DressForm.scss";
import axios from "axios";

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
    const [filteredDresses, setFilteredDresses] = useState([]);

    const handleSearchChange = (e) => {
        let searchTerm = e.target.value
        setNewSearch(searchTerm);
        setFilteredDresses(prev => {
            return dress.filter((item) =>
            item.dressname.toLowerCase().includes(searchTerm.toLowerCase())
        );
        })
    };


    return (
        <>
            <div className="search-dress">
                <div className="search-dress-container">
                    <div className="row">
                        <div >
                            <form onSubmit={e => e.preventDefault()} className="dress-form1">
                                <div className="form-group">
                                    <select className="dress-form-input" name="section" id="section">
                                        <option selected value="x" disabled>Choose Category</option>
                                        <option value="A-line">A-line</option>
                                        <option value="Ballgown">Ballgown</option>
                                        <option value="Short">Short</option>
                                        <option value="Mermaid">Mermaid</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input className="dress-form-input" type="text" name="dress"
                                        placeholder="Search Dress" value={search} onChange={handleSearchChange}/>
                                    {filteredDresses.map((item) => {
                                        return (
                                            <>
                                     <p key={item.id}>
                                     {item.dressname}
                                     </p>
                                    <img
                                    style={{width: 120, height:120}}
                                    src={item.image}
                                     alt={item.dressname}
                                    loading="lazy"
                                    />
                                            </>
                                        )
                                    })}
                                </div>
                                <div className="form-group">
                                    <button
                                        type="submit"
                                        onClick={handleSearchChange}
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