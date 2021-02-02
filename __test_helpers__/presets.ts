import {ConfigParam} from "../src/endpoints";

export const configParam:ConfigParam = {
    gatherBaseUrl: 'http://localhost/',
    gatherApiKey: 'api-1234',
    gatherMapId: 'map-1234',
    gatherSpaceId: 'space-1234'
}
export const endpointParams = {
    apiKey: configParam.gatherApiKey,
    spaceId: configParam.gatherSpaceId,
    mapId: configParam.gatherMapId,
};