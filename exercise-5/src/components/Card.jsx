function Card({ data }){
    return <>
        <div className="card">
            <h4>{data.name}</h4>
            <small>{data.title}</small>
            <a href={data.image.link}><img src={data.image.src} alt={data.image.alt} /></a>
            <p>{data.paragraph}</p>
        </div>
    </>
}

export default Card;