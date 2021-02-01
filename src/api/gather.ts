import {Endpoints, ConfigParam} from '../endpoints';

import axios from 'axios';

export class Api {
    config: any;
    constructor(env: ConfigParam) {
        this.config = Endpoints(env);
    }

    /**
     * @return Promise
     */
    getMap = () => {
        return axios.get(
            this.config.getMap.url,
            { params: this.config.getMap.params }
            )
            .catch((e) => {
                return {
                    error: e,
                    source: `gather.getMap`
                }
            });
    }

    /**
     * @return Promise
     * @param mapFromGather
     * @param mapObjects
     */
    setMap = (mapFromGather, mapObjects) => {
        const mapData = mapFromGather.data;
        mapData.objects = mapObjects;
        return axios.post(this.config.setMap.url, {
            ...this.config.setMap.params,
            mapContent: mapData
        }).catch((e) => {
            return {
                error: e,
                source: `gather.setMap`
            }
        })
    }

    /**
     * @return Promise
     * @param image
     */
    uploadImages = (image) => {
        return axios
            .post(
                this.config.uploadImages.url,
                {
                    bytes: image,
                    spaceId: this.config.uploadImages.params.spaceId,
                },
                { maxContentLength: Infinity, maxBodyLength: Infinity }
            ).catch((e) => {
                return {
                    error: e,
                    source: `gather.uploadImages`
                }
            });
    }
}