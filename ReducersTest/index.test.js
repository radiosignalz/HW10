import {initialState, figuresReducer} from "./index";




describe('figuresReducer', () => {

    it('вызов редьюсера без экшена вернет initialState', () => {
        const result = figuresReducer();

        expect(result).toEqual(initialState);
    });


})