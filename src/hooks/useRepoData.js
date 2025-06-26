import { useState, useCallback, useEffect } from "react";
import { fetchGit } from "../api"

export const useRepoData = (owner, repo) => {
    const [readme, setReadme] = useState('');
    const [languages, setLanguages] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    const loadData = useCallback(async () => {
        setIsLoading(true)

        try {
            const content = await fetchGit.fetchRepoReadme(owner, repo);
            setReadme(content);
        } catch {
            setReadme('ReadMe не задан');
        }

        try {
            const content = await fetchGit.fetchRepoLanguage(owner, repo);
            setLanguages(content);
        } catch {
            setLanguages(["Язык не задан"]);
        }

        setIsLoading(false)
    }, [owner, repo])

    useEffect(() => {
        loadData()
    }, [loadData])

    return { readme, languages, isLoading };
}