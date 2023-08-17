

async function fetchProfileData() {
    const url = 'http://raw.githubusercontent.com/martinswilliam/Portfolio/blob/main/data/profile.json';
    const fetching = await fetch(url)
    return await fetching.json()
}