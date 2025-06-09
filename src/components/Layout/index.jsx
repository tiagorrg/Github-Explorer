import { Link, Outlet, useLocation } from 'react-router-dom';
import { getFromLocalStorage } from '../../utils';
import { KEY_HISTORY } from '../../constants';
import { useEffect, useState } from 'react';

export default function Layout() {
    const [history, setHistory] = useState([])
    const location = useLocation()

    useEffect(() => {
        const storedHistory = getFromLocalStorage(KEY_HISTORY) || [];
        setHistory(storedHistory);
    }, [location])

    return (
        <div>
            <header>
                <Link to="/">Главная</Link>
            </header>
            <aside>
                {history.map(repo => (
                    <Link
                        to={`/${repo.owner}/${repo.repo}`} 
                        key={`${repo.owner}-${repo.repo}`}
                    >
                        {repo.owner}/{repo.repo}
                    </Link>
                ))}
            </aside>
            <main>
                <Outlet />
            </main>
        </div>
    );
}