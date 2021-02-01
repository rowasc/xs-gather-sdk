export interface ConfigParam {
    gatherBaseUrl: string,
    gatherApiKey: string,
    gatherSpaceId: string,
    gatherMapId: string,
}

export const Endpoints = (config: ConfigParam) => {
    const generic_params_group = {
        params: {
            apiKey: config.gatherApiKey,
            spaceId: config.gatherSpaceId,
            mapId: config.gatherMapId,
        },
    };
    return {
        getMap: {
            url: `${config.gatherBaseUrl}api/getMap`,
            ...generic_params_group
        },
        setMap: {
            url: `${config.gatherBaseUrl}api/setMap`,
            ...generic_params_group
        },
        uploadImages: {
            url: `${config.gatherBaseUrl}api/uploadImage`,
            ...generic_params_group
    }};
}