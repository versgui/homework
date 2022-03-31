import fetchData from "./middleware/fetchData";
import { API_ENDPOINT_LAUNCH } from './const/api';

export async function retrieve(id, options) {
    options = options || {};

    return await fetchData(API_ENDPOINT_LAUNCH + id)
        .then(data => {
            const launch = data.results;

            return {
                id: launch.id,
                url: launch.url,
                name: launch.name,
                status: launch.status.id,
                rocket: launch.rocket.configuration.name
            };
        });
}
