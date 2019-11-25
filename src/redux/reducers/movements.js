import { type as findMovementsType } from '../actions/findMovements';
//import items from '../../data/items';

const defaultState = [];

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case findMovementsType: {
            if (!payload) {
                return null;
            }

            return state; //FIXME: Obtener los movimientos del usuario (payload)
        }

        default:
            return state;
    }
}

export default reducer;
