import fetchData from "./middleware/fetchData";
import {API_ENDPOINT_LAUNCH} from './const/api';

async function retrieve(options) {
    options = options || {};
    const offset = pageToOffset(options.page) || 1;
    const locations = 'locations' in options ? options.locations.join(',') : [];

    return await fetchData(API_ENDPOINT_LAUNCH, {'location__ids': locations, 'offset': offset})
        .then(data => {
            const launches = data.results;
            const offsetRegex = /offset=(.*)/;

            return {
                ids: launches.map(launch => launch.id),
                success: launches.filter(launch => launch.status.id === 3),
                failure_canaveral_spacex: launches.filter(launch => {
                    (launch.status.id === 3 || launch.status.id === 7)
                }).length,
                previousPage: data.previous ?? offsetToPage(data.previous.match(offsetRegex)[1]),
                nextPage: data.next ?? offsetToPage(data.next.match(offsetRegex)[1]),
            };
        });
}

function offsetToPage(offset) {
    return offset / 10;
}

function pageToOffset(page) {
    return page * 10;
}

export default retrieve;