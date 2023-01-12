import {useSelector} from "react-redux";
import {Store} from "../types";

export const useUsers = () => {
    return useSelector((state: Store) => state.users.users)
}
