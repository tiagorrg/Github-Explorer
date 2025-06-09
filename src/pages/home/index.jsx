import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');

    const handleSearch = () => {
        navigate(`/${username}/repos`);
    };

    return (
        <div>
            <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Введите название аккаунта Git"
            />
            <button onClick={handleSearch}>Поиск</button>
        </div>
    );
}