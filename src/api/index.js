const GITHUB_API_URL = import.meta.env.VITE_GITHUB_API_URL

export const fetchGit = {
    async fetchRepos(username) {
        try {
            const response = await fetch(`${GITHUB_API_URL}/users/${username}/repos`);

            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error(`Ошибка при запросе репозиториев ${username}:`, error);
            throw error;
        }
    },

    async fetchRepoReadme(owner, repo) {
        try {
            const response = await fetch(`${GITHUB_API_URL}/repos/${owner}/${repo}/readme`);

            if (response.status === 404) {
                return null
            }

            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }

            const data = await response.json()

            return atob(data.content);
        } catch (error) {
            if (error.message.includes('404')) {
                return null;
            }
            console.error(`Ошибка при запросе ReadMe ${owner}/${repo}:`, error);
            throw error
        }
    },

    async fetchRepoLanguage(owner, repo) {
        try {
            const response = await fetch(`${GITHUB_API_URL}/repos/${owner}/${repo}/languages`);

            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }

            const data = await response.json()

            return Object.keys(data);
        } catch (error) {
            console.error(`Ошибка при запросе ReadMe ${owner}:`, error);
            throw error;
        }
    }
};