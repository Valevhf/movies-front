'use client';
import { MovieShortInfo, Actor } from "@/config/interfaces";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_ACTORS_MOVIE_ID } from "@/graphql/querys";
import CastCard from "@/components/CastCard";



const page = ({ params: { id } }: { params: { id: MovieShortInfo["id"] } }) => {


    const [actors, setActors] = useState<Actor[]>([]);

    const { error, loading, data } = useQuery(GET_ACTORS_MOVIE_ID, {
        variables: {
            id: parseInt(id.toString())
        }
    });

    useEffect(() => {
        if (data) {
            setActors(data.getMovieByID.actors)
        }
    }, [data]);


    return (
        <main className="mt-5 flex flex-col mb-6">
            <div className="w-[1200px] max-w-full px-4 mx-auto">
                <div className="flex flex-col mb-6 mt-6">
                    <h1 className="text-2xl font-medium">All Cast</h1>
                </div>
                <div className="grid grid-cols-4 mt-4 gap-4">
                    {actors?.map((cast: Actor) => (
                        <CastCard key={cast?.id} cast={cast} />
                    ))}
                </div>
            </div>
        </main>
    );
};

export default page;
