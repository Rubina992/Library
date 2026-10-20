import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'sana',
    email: 'sana@gmail.com',
  },
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload
    },
    updateEmail: (state, action) => {
      state.email = action.payload
    },
  },
})

export const { updateEmail, updateName } = userSlice.actions
export default userSlice.reducer
