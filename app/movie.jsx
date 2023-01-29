import Link from "next/link";
export default function Movie({title,id,release_date,poster_path}){
    var url = "https://image.tmdb.org/t/p/original/";
    
    return (
        <div>
            <h1>{title}</h1>
            <h1>{release_date}</h1>
            <Link href={`/${id}`} >
                <img src={url+poster_path} alt={title} width={800} height={800}/>
            </Link>
        </div>
    );
}