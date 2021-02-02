import { Api } from './../src/api/gather';
jest.mock('axios');
import axios from 'axios';
import { configParam, endpointParams } from "../__test_helpers__/presets";
import mock = jest.mock;
mock('./../src/api/gather.ts')
it('Uses ConfigParam to set Env variables', () => {
    const api = new Api(configParam);

    expect(api.config).toStrictEqual(
{
            "getMap": {
                "params": {
                    "apiKey": "api-1234",
                    "mapId": "map-1234",
                    "spaceId": "space-1234"
                },
                "url": "http://localhost/api/getMap"
            },
            "setMap": {
                "params": {
                    "apiKey": "api-1234",
                    "mapId": "map-1234",
                    "spaceId": "space-1234"
                },
                "url": "http://localhost/api/setMap"
            },
            "uploadImages": {
                "params": {
                    "apiKey": "api-1234",
                    "mapId": "map-1234",
                    "spaceId": "space-1234"
                },
                "url": "http://localhost/api/uploadImage"
            }
        }
    );
});
