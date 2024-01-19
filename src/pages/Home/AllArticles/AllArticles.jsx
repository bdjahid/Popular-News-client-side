import { Link, useLoaderData } from 'react-router-dom';
import './AllArticles.css'

import NewsCard from './NewsCard';
import { useEffect, useState } from 'react';



const AllArticles = () => {
    const [news, setNews] = useState([]);
    const [search, setSearch] = useState('');
    // const { count } = useLoaderData();
    // console.log(count)

    const [itemPerPage, setItemPerPage] = useState(10);

    const [currentPage, setCurrentPage] = useState(0)
    const { count } = useLoaderData()

    const numberOfPages = Math.ceil(count / itemPerPage);

    const pages = [...Array(numberOfPages).keys()];

    // useEffect(() => {
    //     fetch('http://localhost:5000/newsCount')
    //         .then(res => res.json())
    //         .then(data => setCount(data.count))
    // }, [])

    useEffect(() => {
        fetch(`http://localhost:5000/news?search=${search}&page=${currentPage}&size=${itemPerPage}`)
            .then(res => res.json())
            .then(data => {
                setNews(data)
            })
    }, [search, currentPage, itemPerPage])


    const handleSearch = (event) => {
        event.preventDefault();
        const form = event.target;
        const item = form.search.value;
        console.log(item)
        setSearch(item)
    }


    const handleItemsPerPages = e => {
        const val = parseInt(e.target.value)
        setItemPerPage(val)
        setCurrentPage(0)
    }

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }
    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        }
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
                    <form>
                        <div className="flex justify-center">
                            <select type="text" name="tags" defaultValue="default" className="select input input-bordered w-full max-w-xs">
                                <option value="default" disabled selected>Filter By Tags</option>
                                <option value="AI">AI</option>
                                <option value="Education">Education</option>
                                <option value="Technology">Technology</option>
                                <option value="Politics">Politics</option>
                                <option value="Play">Play</option>
                                <option value="Robot">Robot</option>
                                <option value="Games">Games</option>
                                <option value="Football">Football</option>
                                <option value="Creative">Creative</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div>
                    <form onSubmit={handleSearch}>
                        <div className="flex justify-center">
                            <div className="join">
                                <input name="search" type="text" placeholder="search ....." className="input input-bordered join-item" />
                                <button type='submit ' className="btn btn-info join-item">Search</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div>
                    <form>
                        <div className="flex justify-center">
                            <div className="join">
                                <select name="publisher" type="text" defaultValue="default" className="select input input-bordered w-full max-w-xs">
                                    <option value="default" disabled selected>Filter By Publisher</option>
                                    <option value="Jimmy Dane">Jimmy Dane</option>
                                    <option value="Jennifer Wood">Jennifer Wood</option>
                                    <option value="system">system</option>
                                    <option value="Robot">Robot</option>
                                    <option value="Theo Minh Châu">Theo Minh Châu</option>
                                    <option value="Ukrainska Pravda">Ukrainska Pravda</option>
                                    <option value="Daniel Deangelo">Daniel Deangelo</option>
                                    <option value="Reuters">Reuters</option>
                                    <option value="John Pike">John Pike</option>
                                    <option value="MarketScreener">MarketScreener</option>
                                    <option value="RTTNews">RTTNews</option>
                                    <option value="Kumar Natasha">Kumar Natasha</option>
                                    <option value="The Philadelphia Inquirer">The Philadelphia Inquirer</option>
                                    <option value="Presstv">Presstv</option>
                                </select>
                                {/* <button type='submit ' className="btn btn-info join-item">Search</button> */}
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
            <div className='pagination my-10'>
                <p>Current Page : {currentPage}</p>
                <button onClick={handlePrevPage}>prev</button>
                {
                    pages.map(page => <button
                        onClick={() => setCurrentPage(page)}
                        className={currentPage === page ? 'selected' : undefined}
                        key={page}
                    > {page}</button>)
                }
                <button onClick={handleNextPage}>next</button>
                <select onChange={handleItemsPerPages} value={itemPerPage} name="" id="">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>
            </div>
        </div>
    );
};

export default AllArticles;