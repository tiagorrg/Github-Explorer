import { useCallback, useEffect } from "react"
import { getFromLocalStorage, saveToLocalStorage } from '../utils';
import { KEY_HISTORY } from '../constants';

export const useRepoHistoryData = (owner, repo) => {
    const updateHistory = useCallback(() => {
        const oldRepos = getFromLocalStorage(KEY_HISTORY)

        if (!oldRepos) {
            saveToLocalStorage(KEY_HISTORY, [{ owner, repo }])
            return
        }

        for (let i = oldRepos.length - 1; i >= 0; i--) {
            if (oldRepos[i].repo === repo && oldRepos[i].owner === owner) {
                oldRepos.splice(i, 1);
            }
        }

        if (oldRepos.length > 10) {
            oldRepos.splice(0, 1);
        }

        saveToLocalStorage(KEY_HISTORY, [...oldRepos, { owner, repo }])
    }, [owner, repo])

    useEffect(() => {
        updateHistory()
    }, [updateHistory])
}