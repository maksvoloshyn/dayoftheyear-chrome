{
    const ONE_DAY_MS = 1000 * 60 * 60 * 24;
    const now = new Date();

    function getDayFromDate(date) {
        const start = new Date(date.getFullYear(), 0, 0);
        const diff = date - start;

        return Math.floor(diff / ONE_DAY_MS);
    }

    document.getElementById('dayContainer').innerText = getDayFromDate(now);
    document.getElementById('yearContainer').innerText = now.getFullYear();
}
