function Card({ data }){
    return <>
        <div className="card">
            <h4>{data.name}</h4>
            <small>{data.title}</small>
            <p>{data.paragraph}</p>
            <img src={data.image.src} alt={data.image.alt} />
        </div>
    </>
}

export default Card;