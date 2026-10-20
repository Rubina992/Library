

import { useDispatch, useSelector } from 'react-redux'
import { updateEmail, updateName } from '../Redux/UserSlice.js'

export default function Navbar() {
  const name = useSelector((state) => state.user.name)
  const email = useSelector((state) => state.user.email)

  const dispatch = useDispatch()

  return (
    <>
      <h1>Welcome, {name}</h1>
      <p>Here is my email: {email}</p>

      <button type="button" onClick={() => dispatch(updateName('admin'))}>
        Update Name
      </button>

      <button
        type="button"
        onClick={() => dispatch(updateEmail('admin@example.com'))}
      >
        Update Email
      </button>
    </>
  )
}
