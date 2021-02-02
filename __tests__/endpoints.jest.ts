import {Endpoints, ConfigParam} from './../src/endpoints';
import { configParam, endpointParams as params } from '../__test_helpers__/presets';

it('Receives a ConfigParam object and Returns an object with API endpoint configurations', () => {

    expect(Endpoints(configParam)).toStrictEqual({
        getMap: {
            url: `${configParam.gatherBaseUrl}api/getMap`,
            params,
        },
        setMap: {
            url: `${configParam.gatherBaseUrl}api/setMap`,
            params,
        },
        uploadImages: {
            url: `${configParam.gatherBaseUrl}api/uploadImage`,
            params,
        }});
});