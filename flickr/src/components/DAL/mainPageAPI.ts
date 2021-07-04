import {instance} from "./instance";

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
    getNewImages(keyword: string, page: number, perpage: number) {
        return instance.get<newPhotos>(`?method=flickr.photos.search&api_key=07d85452f5459d91f976cb90272be7ac&tags=${keyword}&per_page=${perpage}&page=${page}&format=json&nojsoncallback=1`)
    },
}