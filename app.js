{
    const ONE_DAY_MS = 1000 * 60 * 60 * 24;
    let now = new Date();

    function getDayFromDate (date = new Date()) {
        let start = new Date(date.getFullYear(), 0, 0);
        let diff = date - start;
        return Math.ceil(diff / ONE_DAY_MS);
    }

    document.getElementById('dayContainer').innerText = getDayFromDate(now);
    document.getElementById('yearContainer').innerText = now.getFullYear();
}