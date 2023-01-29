
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams(){
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
    const res = await data.json();
    return res.results.map((movie) => ({
        movieDetails: toString(movie.id),
    }))
}


export default async function MovieDetial({ params }){
    const { movieDetails } = params
    const url = "https://image.tmdb.org/t/p/original/";
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieDetails}?api_key=${process.env.API_KEY}`)
    const res = await data.json();
    return (
        <main>
            <h1 className='text-center pb-12 text-lg font-bold'>  MovieFlix 🔥  </h1>
            <div>

                <div className="text-left">
                    <h2 className="text-2xl font-bold">{res.title}</h2>
                    <h2 className="text-lg ">Release date: {res.release_date}</h2>
                    <h2>Runtime : {Math.trunc( res.runtime/60)} hour {res.runtime%60} minutes</h2>
                    <h2 className="text-sm bg-green-600 inline-block my-2 py-2 px-2 rounded-lg">{res.status}</h2>
                    <Image className="my-12 w-5/6" src={url + res.backdrop_path} width={600} height={1000} priority/>
                    <p className="w-4/6">{res.overview}</p>
                </div>
            </div>
        </main>
    );
}

