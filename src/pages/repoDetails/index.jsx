import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGit } from '../../api/fetchGit';
import { getFromLocalStorage, saveToLocalStorage } from '../../utils';
import { KEY_HISTORY } from '../../constants';

export const RepoDetails = () => {
    const { owner, repo } = useParams();
    const [readme, setReadme] = useState('');
    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        const loadReadme = async () => {
            try {
                const content = await fetchGit.fetchRepoReadme(owner, repo);
                setReadme(content);
            } catch {
                setReadme('ReadMe не задан');
            }
        };
        
        loadReadme()

        const loadLanguages = async () => {
            try {
                const content = await fetchGit.fetchRepoLanguage(owner, repo);
                setLanguages(content);
            } catch {
                setLanguages([]);
            }
        }

        loadLanguages()
    }, [owner, repo]);

    useEffect(() => {
        const oldRepos = getFromLocalStorage(KEY_HISTORY)

        if(!oldRepos){
            saveToLocalStorage(KEY_HISTORY, [{owner, repo}])
            return
        }

        for (let i = oldRepos.length - 1; i >= 0; i--) {
            if (oldRepos[i].repo === repo && oldRepos[i].owner === owner) {
                oldRepos.splice(i, 1);
            }
        }

        if (oldRepos.length > 10){
            oldRepos.splice(0, 1);
        }

        saveToLocalStorage(KEY_HISTORY, [...oldRepos, {owner, repo}])
    }, [owner, repo])

    return (
        <div>
            <h1>{owner}/{repo}</h1>
            <h2>README.md</h2>
            <pre>{readme}</pre>
            <h2>Языки</h2>
            {
                languages.length !== 0 &&
                <ul>
                    {languages.map(lang => <li key={lang}>{lang}</li>)}
                </ul>
            }
        </div>
    );
}