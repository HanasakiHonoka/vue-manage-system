import request from '../utils/request';

export const fetchData = query => {
    return request({
        url: './table.json',
        method: 'get',
        params: query
    });
};

export const getMoviePage = query => {
    return request({
        url: './movie/page',
        method: 'post',
        data: query
    });
};

export const getDic = query => {
    return request({
        url: './dic/all',
        method: 'get',
        params: query
    });
};

export const submitForm = query => {
    return request({
        url: './form',
        method:'post',
        data: query,
    });
};