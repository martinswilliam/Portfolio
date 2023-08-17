

async function fetchProfileData() {
    const url = 'http://raw.githibusercontent.com/martinswilliam/portifolio/main/dataprofile.js';
    const fetching = await fetch(url)
    return await fetching.json()
}