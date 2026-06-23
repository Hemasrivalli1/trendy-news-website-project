import React, { useCallback, useEffect, useState } from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'

const NewsApp = () => {
    const [search, setSearch] = useState("india");
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const API_KEY = "ae4d7fcdaefe66336b93e7a20c444737";

    const getData = useCallback(async (query) => {
        try {
            setLoading(true);
            setError("");

            const response = await fetch(
                `https://gnews.io/api/v4/search?q=${query}&lang=en&country=in&max=10&apikey=${API_KEY}`
            );

            const jsonData = await response.json();

            if (!response.ok) {
                throw new Error(jsonData.message || "Unable to load news");
            }

            // 🔥 SAFE FIX (MAIN BUG FIX)
            const dt = Array.isArray(jsonData?.articles)
                ? jsonData.articles.slice(0, 10)
                : [];

            setNewsData(dt);

        } catch (err) {
            setError(err.message || "Something went wrong");
            setNewsData([]);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        getData("india");
    }, [getData]);

    const handleInput = (e) => {
        setSearch(e.target.value);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        getData(search);
    };

    const userInput = (event) => {
        const category = event.target.value;
        setSearch(category);
        getData(category);
    };

    return (
        <section className="newsPageWrap left">
            <div className="container py-5 right">

                <div className="row justify-content-center mb-4">
                    <div className="col-lg-10">
                        <div className="newsHero">
                            <span className="heroBadge">Live updates</span>
                            <h1 className="newsTitle">Stay updated with Trendy News</h1>

                            <div className="d-flex gap-2 flex-wrap">
                                <Link to="/about" className="btn btn-light fw-semibold">
                                    Learn the project
                                </Link>
                                <Link to="/contact" className="btn btn-outline-light fw-semibold">
                                    Contact page
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SEARCH */}
                <div className="row justify-content-center mb-4">
                    <div className="col-lg-10">
                        <div className="searchPanel">

                            <form onSubmit={handleSearch}>
                                <div className="input-group input-group-lg">
                                    <input
                                        type='text'
                                        placeholder='Search news...'
                                        value={search}
                                        onChange={handleInput}
                                        className="form-control"
                                    />
                                    <button type='submit' className='btn searchBtn'>
                                        Search
                                    </button>
                                </div>
                            </form>

                            <div className='categoryBtn mt-3'>
                                <button className='btn btn-outline-light' onClick={userInput} value="sports">Sports</button>
                                <button className='btn btn-outline-light' onClick={userInput} value="politics">Politics</button>
                                <button className='btn btn-outline-light' onClick={userInput} value="entertainment">Entertainment</button>
                                <button className='btn btn-outline-light' onClick={userInput} value="health">Health</button>
                                <button className='btn btn-outline-light' onClick={userInput} value="fitness">Fitness</button>
                            </div>

                        </div>
                    </div>
                </div>

                {/* RESULTS */}
                <div className="row justify-content-center">
                    <div className="col-lg-10">

                        {loading && (
                            <div className="statusBlock">
                                <div className="spinner-border me-3"></div>
                                <span>Loading latest news...</span>
                            </div>
                        )}

                        {error && <p style={{ color: "red" }}>{error}</p>}

                        {!loading && !error && <Card data={newsData} />}

                        {!loading && !error && newsData.length === 0 && (
                            <p>No news found</p>
                        )}

                    </div>
                </div>

            </div>
        </section>
    )
}

export default NewsApp;