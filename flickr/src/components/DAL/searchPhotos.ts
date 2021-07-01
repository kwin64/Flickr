import {instance} from "./instance";

export type photo = {
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
        photo: Array<photo>
    }
    stat: string
}

export const userAPI = {
    searchKeyWord(keyword: string) {
        return instance.get<newPhotos>(`?method=flickr.photos.search&api_key=07d85452f5459d91f976cb90272be7ac&tags=${keyword}&per_page=10&page=1&format=json&nojsoncallback=1&per_page=12&page=1`)
    },
}