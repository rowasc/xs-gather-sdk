jest.mock('axios');
import axios from 'axios';
import { Api } from "./../src/api/gather";
import {configParam} from "../__test_helpers__/presets";
describe('Api::setMap', () => {
    let api;
    beforeEach(() => {
        jest.clearAllMocks();
        api = new Api(configParam);
        jest.spyOn(api, 'setMap');
        jest.spyOn(api, 'getMap');
        jest.spyOn(api, 'uploadImages');
    })

    it('Should call axios.get when I call getMap', async () => {
        // @ts-ignore
        axios.get.mockImplementationOnce(() =>
            Promise.resolve({data: {objects: []}}),
        );
        await api.getMap();
        expect(axios.get).toBeCalled();
    });


    it('Should call axios.get when I call setMap', async () => {
        // @ts-ignore
        axios.post.mockImplementationOnce(() =>
            Promise.resolve({data: {objects: []}}),
        );
        await api.setMap({data: {objects: []}}, {}).then((r) => {
            expect(r).not.toStrictEqual({
                error: 'Invalid parameters.',
                source: 'gather.setMap'
            });
        });
        expect(axios.post).toBeCalled();
    });

    it('Should throw an error if I send invalid map structures', async () => {
        // @ts-ignore
        axios.post.mockImplementationOnce(() =>
            Promise.resolve({data: {objects: []}}),
        );
        // @ts-ignore
        axios.get.mockImplementationOnce(() =>
            Promise.resolve({data: {objects: []}}),
        );
        await api.setMap({}, {}).catch((e) => {
            expect(e.message).toBe('Invalid objects at gather.setMap');
        });
        expect(axios.post).not.toBeCalled();
        expect(axios.get).not.toBeCalled();
    });
})