import React, { FC, createContext, ReactNode, ReactElement } from "react";
import { RootStore } from './RootStore';

export const RootStoreContext = createContext<RootStore>({} as RootStore);

export type StoreComponent = FC<{
    children: ReactNode;
}>;

export const RootStoreProvider: StoreComponent = ({
    children,
}): ReactElement => {
    return (
        <RootStoreContext.Provider value={new RootStore()}>
            {children}
        </RootStoreContext.Provider>
    );
};