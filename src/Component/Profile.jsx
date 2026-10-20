import { useSelector } from 'react-redux';

export default function Profile() {
    const name = useSelector((state) => state.user.name);

    return (
        <div>
            <h1>Profile</h1>
            <h1>Welcome, {name}</h1>
        </div>
    );
}
