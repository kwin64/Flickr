import {instance} from "./instance";

// const params = `api_key=07d85452f5459d91f976cb90272be7ac&text=${keyword}&format=json&nojsoncallback=1&per_page=12&page=${this.currPage}`;
// const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&';
// const params = `api_key=07d85452f5459d91f976cb90272be7ac&text=${keyword}&format=json&nojsoncallback=1&per_page=12&page=${this.currPage}`;


export type photoInfo = {
    farm: 66
    id: string
    isfamily: number
    isfriend: number
    ispublic: number
    owner: string
    secret: string
    server: string
    title: string
}

export type newPhotos = {
    photos: {
        page: number,
        pages: number,
        perpage: number,
        total: number,
        photo: Array<photoInfo>
    }
    stat: string
}

export const userAPI = {
    getNewImages(keyword: string) {
        return instance.get<newPhotos>(`?method=flickr.photos.search&api_key=07d85452f5459d91f976cb90272be7ac&tags=${keyword}&per_page=10&page=1&format=json&nojsoncallback=1&per_page=12&page=1`)
    },
}