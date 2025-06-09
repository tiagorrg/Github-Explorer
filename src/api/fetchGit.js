export const fetchGit = {
    async fetchRepos(username) {
        try {
            const response = await fetch(`https://api.github.com/users/${username}/repos`);
            
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
            const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/readme`);

            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }
            
            const data = await response.json()

            return atob(data.content);
        } catch (error) {
            console.error(`Ошибка при запросе ReadMe ${owner}:`, error);
            throw error;
        }
    },

    async fetchRepoLanguage(owner, repo) {
        try {
            const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/languages`);

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