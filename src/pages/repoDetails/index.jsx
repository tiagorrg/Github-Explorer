import { useParams } from 'react-router-dom';
import { useRepoData } from '../../hooks/useRepoData.js';
import { useRepoHistoryData } from '../../hooks/useRepoHistoryData.js';
import { Loading } from '../../components/Loading/index.jsx';
import ReactMarkdown from 'react-markdown'
import 'github-markdown-css/github-markdown-light.css'
import * as SC from "./styles.js"

export const RepoDetails = () => {
    const { owner, repo } = useParams();
    const { readme, languages, isLoading } = useRepoData(owner, repo);

    useRepoHistoryData(owner, repo);

    return (
        <div>
            <h1>{owner}/{repo}</h1>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <h2>README.md</h2>
                    <SC.Wrapper>
                        <ReactMarkdown>{readme}</ReactMarkdown>
                    </SC.Wrapper>
                    <h2>Языки</h2>
                    <SC.Wrapper>
                        {languages.length !== 0 && (
                            <ul>
                                {languages.map((lang) => (
                                    <li key={lang}>{lang}</li>
                                ))}
                            </ul>
                        )}
                    </SC.Wrapper>
                </>
            )}
        </div>
    );
};