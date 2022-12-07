import { UserState } from "../user/state/user.reducer";

export interface State{
    //products: ProductState; this is problematic lazy loading 
    user: UserState;
}