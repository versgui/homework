import retrieve from '../api/launches';
import {useEffect, useState} from 'react';

const Launch = () => {
    const [launches, setLaunches] = useState(null);
    const [page, setPage] = useState(1);

    useEffect(async () => {
        await retrieve({page: page, locations: [12, 143]})
            .then(function (fetched) {
                setLaunches(fetched);
            });
    }, []);

    return (
        <>
            {/* could be a better UX 🙈 */}
            <ul>
                {launches && launches.ids.map((id) => (
                    <li key={id}>{id}</li>
                ))}
            </ul>
        </>
    );
};

export default Launch;
