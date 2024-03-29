import type {ReactNode, Context} from 'react';
import {useReducer, useMemo} from 'react';

type FactoryProps<TState, TAction> = {
    context: Context<{dispatch: (action: TAction) => void; state: TState}>;
    reducer: (state: TState, action: TAction) => TState;
    initialState: TState;
};

export const createStoreProvider =
    <TState, TAction>({initialState, reducer, context}: FactoryProps<TState, TAction>) =>
    // eslint-disable-next-line react/display-name
    ({children}: {children?: ReactNode}) => {
        const {Provider} = context;
        const [state, dispatch] = useReducer(reducer, initialState);
        const memoizedValue = useMemo(() => ({state, dispatch}), [state]);
        return <Provider value={memoizedValue}>{children}</Provider>;
    };
