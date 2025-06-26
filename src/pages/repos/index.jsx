import { useState, useEffect } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { fetchGit } from "../../api"
import * as SC from "./styles"
import { Loading } from "../../components/Loading";

export const Repos = () => {
    const { username } = useParams();
    const [repos, setRepos] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const loadRepos = async () => {
            setIsLoading(true)
            try {
                const data = await fetchGit.fetchRepos(username);
                setRepos(data);
                setIsLoading(false)
            } catch {
                setRepos([]);
                navigate('/*')
            }
        };

        loadRepos();
    }, [username, navigate]);


    return (
        <>
            {
                isLoading ? <Loading/> :
                <div>
                    <h1>Репозитории {username}</h1>
                    <SC.RepoList>
                        {repos.map(repo => (
                            <SC.RepoItem key={repo.id}>
                                <SC.RepoLink to={`/${username}/${repo.name}`}>{repo.name}</SC.RepoLink>
                            </SC.RepoItem>
                        ))}
                    </SC.RepoList>
                </div>
            }
        </>
    );
}