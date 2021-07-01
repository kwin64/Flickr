import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://api.flickr.com/services/rest'
})

// const params = `api_key=07d85452f5459d91f976cb90272be7ac&text=${keyword}&format=json&nojsoncallback=1&per_page=12&page=${this.currPage}`;
// const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&';
// const params = `api_key=07d85452f5459d91f976cb90272be7ac&text=${keyword}&format=json&nojsoncallback=1&per_page=12&page=${this.currPage}`;

