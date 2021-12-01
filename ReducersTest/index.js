
export const ADD_FIGURE = 'ADD_FIGURE';
export const REMOVE_FIGURE = 'REMOVE_FIGURE';

export const initialState = {
    figures: []
}

export const figuresReducer = (state = initialState, action) => {
    switch (action?.type) {
        case ADD_FIGURE: {
            return {
                figures: [
                    ...state.figures,
                    action.payload,
                ]
            }
        }
        case REMOVE_FIGURE: {
            return {
                figures: [
                    ...state.figures.filter((figure) => figure.name !== action.payload),
                ]
            }
        }

        default: {
            return state;
        }
    }
};
