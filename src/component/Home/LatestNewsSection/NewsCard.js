import React from 'react';

const NewsCard = ({ news }) => {
    console.log(news)
    return (
        <div className="space-y-4">
            <div >
                <img className="border-b-8 border-green-100" src={news.img} alt="" />
            </div>

            <div className="border-b pb-4">
                <p> <small>{news.pubDate} {news.pubMonth} {news.pubYear}</small></p>
            </div>
            <div >
                <h4 className="pb-4 text-lg font-medium">{news.title}</h4>
                <p className="text-sm">{news.text}</p>
            </div>
            <button className="bg-green-500 text-white px-5 py-2  ">Read more</button>
        </div>
    );
};

export default NewsCard;