import { Endpoints, ConfigParam } from '../endpoints';

import axios from 'axios';

export class Api {
    config: any;
    constructor(env: ConfigParam) {
        this.config = Endpoints(env);
    }

    /**
     * get the Gather.town map from their HTTP API
     * @return Promise
     */
    getMap = () => {
        return axios.get(
            this.config.getMap.url,
            { params: this.config.getMap.params }
        );
    }

    /**
     * @return Promise
     * @param mapFromGather
     * @param mapObjects
     */
    setMap = (mapFromGather, mapObjects) => {
        const mapData = mapFromGather.data;
        if (!mapData || !mapObjects || !mapData.objects) {
            return Promise.reject(new Error('Invalid objects at gather.setMap'));
        }
        mapData.objects = mapObjects;
        return axios.post(this.config.setMap.url, {
            ...this.config.setMap.params,
            mapContent: mapData
        });
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
                // this is based on the gather.town example config
                { maxContentLength: Infinity, maxBodyLength: Infinity }
            );
    }
    /**
     *
     * @param objects
    */
    updateMap = (objects) => {
        return this.getMap()
            .then((result) => {
                return this.setMap(result, objects);
            }).catch((e) => {
              return {error: e, source: 'gather.updateMap'};
            });
    };
}