import exp = require("constants");

jest.mock('axios');
import axios from 'axios';
import { Api } from "./../src/api/gather";
import {configParam} from "../__test_helpers__/presets";
describe('Api::updateMap', () => {
    let api;
    beforeEach(() => {
        api = new Api(configParam);
        jest.spyOn(api, 'setMap');
        jest.spyOn(api, 'getMap');
        jest.spyOn(api, 'uploadImages');
    })
    it('calls setMap and getMap', async () => {
        // @ts-ignore
        axios.get.mockImplementationOnce(() =>
            Promise.resolve({data: {objects: []}}),
        );
        // @ts-ignore
        axios.post.mockImplementationOnce(() =>
            Promise.resolve({data: {objects: []}}),
        );
        await api.updateMap({objects: []}).then(r => {}).catch(r => {});
        expect(api.setMap).toBeCalled();
        expect(api.getMap).toBeCalled();
        expect(api.uploadImages).not.toBeCalled();
    });
    it('lets me check updateMap calls getMap and throws when getMap returns an error', async () => {
        // @ts-ignore
        axios.get.mockImplementationOnce(() =>
            Promise.reject({error: 'Something'}),
        );
        await api.updateMap({objects: []}).then(r => {
           expect(r).toStrictEqual({"error": {"error": "Something"}, "source": "gather.updateMap"});
        });
        expect(api.getMap).toBeCalled();
        expect(api.setMap).not.toBeCalled();
        expect(api.uploadImages).not.toBeCalled();
    });
})