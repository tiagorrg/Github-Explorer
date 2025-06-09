import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchGit } from "../../api/fetchGit"

export const Repos = () => {
    const { username } = useParams();
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const loadRepos = async () => {
            try {
                const data = await fetchGit.fetchRepos(username);
                setRepos(data);
            } catch {
                setRepos([]);
            }
        };

        loadRepos();
    }, [username]);


    return (
        <div>
            <h1>Репозитории {username}</h1>
            <ul>
                {repos.map(repo => (
                    <li key={repo.id}>
                        <Link to={`/${username}/${repo.name}`}>{repo.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}