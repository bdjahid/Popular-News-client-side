import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import NewsImg from "./NewsImg";
const BreakingNews = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/news')
            .then(res => res.json())
            .then(data => {
                setNews(data)
            })
    }, [])
    return (
        <div className="my-10">
            <Marquee speed={100}>
                <div className="flex gap-4">
                    {
                        news.map(paper => <NewsImg
                            key={paper._id}
                            paper={paper}
                        ></NewsImg>)
                    }
                </div>
            </Marquee>
        </div>
    );
};

export default BreakingNews;