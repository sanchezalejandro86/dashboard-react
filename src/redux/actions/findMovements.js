export const type = 'findMovements';

const findMovements = (userId) => ({
    type,
    payload: userId,
});

export default findMovements;
