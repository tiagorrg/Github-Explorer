import { Link, Outlet, useLocation } from 'react-router-dom';
import { getFromLocalStorage } from '../../utils';
import { KEY_HISTORY } from '../../constants';
import { useEffect, useState } from 'react';
import * as SC from './styles'

export default function Layout() {
    const [history, setHistory] = useState([])
    const location = useLocation()

    useEffect(() => {
        const storedHistory = getFromLocalStorage(KEY_HISTORY) || [];
        setHistory(storedHistory);
    }, [location])

    return (
        <SC.Container>
            <SC.Header>
                <SC.HomeLink to="/">Главная</SC.HomeLink>
            </SC.Header>
            <SC.Sidebar>
                {history.map(repo => (
                    <SC.HistoryLink
                        to={`/${repo.owner}/${repo.repo}`} 
                        key={`${repo.owner}-${repo.repo}`}
                    >
                        {repo.owner}/{repo.repo}
                    </SC.HistoryLink>
                ))}
            </SC.Sidebar>
            <SC.MainContent>
                <Outlet />
            </SC.MainContent>
        </SC.Container>
    );
}