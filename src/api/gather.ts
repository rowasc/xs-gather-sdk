import endpoints, {ConfigParam} from '../endpoints';

import axios from 'axios';

export const api = (env: ConfigParam) => {
    const config = endpoints(env);
    /**
     * @return Promise
     */
    const getMap = () => {
        return axios.get(config.getMap.url, { params: config.getMap.params })
    }

    /**
     * @return Promise
     * @param mapFromGather
     * @param mapObjects
     */
    const setMap = (mapFromGather, mapObjects) => {
        const mapData = mapFromGather.data;
        mapData.objects = mapObjects;
        return axios.post(config.setMap.url, {
            ...config.setMap.params,
            mapContent: mapData
        });
    }

    /**
     * @return Promise
     * @param image
     */
    const uploadImages = (image) => {
        return axios
            .post(
                config.uploadImages.url,
                {
                    bytes: image,
                    spaceId: config.uploadImages.params.spaceId,
                },
                { maxContentLength: Infinity, maxBodyLength: Infinity }
            );
    }
    return this;
}