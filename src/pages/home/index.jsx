import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as SC from "./styles"

export const Home = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');

    const handleSearch = () => {
        navigate(`/${username}/repos`);
    };

    return (
        <div>
            <SC.Input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Введите название аккаунта Git"
            />
            <SC.Button onClick={handleSearch}>Поиск</SC.Button>
        </div>
    );
}