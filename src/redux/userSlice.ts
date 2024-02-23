import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface userType {
	user: {
		avatar: {
			url: string;
			public_id: string;
		};
		_id: number;
		fullName: string;
		userName: string;
		email: string;
		savaPost: [];
		isPrivate: boolean;
		refreshToken: string;
	} | any;
}
const saveUser:any = localStorage.getItem("curr-user") ? localStorage.getItem("curr-user") : null
const initialState: userType = {
    user: JSON.parse(saveUser)
};

export const counterSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login: (state, action: PayloadAction<userType | null>) => {
			state.user = action.payload;

						localStorage.setItem(
							"curr-user",
							JSON.stringify(action?.payload)
						);

		},
		logout: (state) => {
			state.user = null;
			localStorage.setItem("curr-user", "");
		}
	},
});

// Action creators are generated for each case reducer function
export const { login, logout } = counterSlice.actions;

export default counterSlice.reducer;
