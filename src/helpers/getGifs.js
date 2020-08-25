export const getGifs = async (category) => {
    //encodeURI escapar espacios en la url
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=2t6PO3SEnum19p3UjKXCDTT2zub2Wzsc`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( img =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    //console.log(gifs);
    return gifs;
}