import { Link } from 'react-router-dom';
import './AllArticles.css'

import NewsCard from './NewsCard';
import { useEffect, useState } from 'react';

const AllArticles = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/news')
            .then(res => res.json())
            .then(data => {
                setNews(data)

            })
    }, [])


    const handleSearch = (event) => {
        event.preventDefault();
        const form = event.target;
        const item = form.search.value;
        console.log(item)
    }
    return (
        <div>
            <div className="hero min-h-screen imgBg">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">All Articles</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to="/">
                            <button className="btn btn-ghost">Home | Articles</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='flex justify-around my-10'>
                <div>
                    <form onSubmit={handleSearch}>
                        <div className="flex justify-center">
                            <select className="select input input-bordered w-full max-w-xs">
                                <option disabled selected>What is the best TV show?</option>
                                <option>Game of Thrones</option>
                                <option>Lost</option>
                                <option>Breaking Bad</option>
                                <option>Walking Dead</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div>
                    <form onSubmit={handleSearch}>
                        <div className="flex justify-center">
                            <div className="join">
                                <input name="search" type="text" placeholder="search ....." className="input input-bordered join-item" />
                                <button className="btn btn-info join-item">Search</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div>
                    <form onSubmit={handleSearch}>
                        <div className="flex justify-center">
                            <div className="join">
                                <select className="select input input-bordered w-full max-w-xs">
                                    <option disabled selected>What is the best TV show?</option>
                                    <option>Game of Thrones</option>
                                    <option>Lost</option>
                                    <option>Breaking Bad</option>
                                    <option>Walking Dead</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mx-20'>
                {
                    news.map(paper => <NewsCard
                        key={paper._id}
                        paper={paper}
                    ></NewsCard>)
                }
            </div>
        </div>
    );
};

export default AllArticles;