
import React from 'react'

const NewsItem=(props)=>{

 let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className="my-3">
        <div className="card" >
          <div style={{
            display:'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'
          }}>
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
          <img src={!imageUrl ? "https://images.indianexpress.com/2022/09/cows.jpg" : imageUrl} className="card-img-top" alt=".." />
          <div className="card-body">
            <h5 className="card-title"> {title}<span classNme="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: 1 }}>
              {source}
            </span></h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {date}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>

      </div>
    )
  }


export default NewsItem
