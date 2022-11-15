import axios from 'axios';

export async function getAll(limit=15,pageNumber=1) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts',
        {params: {
            _limit: limit,
            _page: pageNumber
        }} );
    // const json = await response.data;
    // console.log(json);
    // return json;
    return response;
}

// export default class getAllPosts  {
//     static async getAllClass(){
//         // try {
//             const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//             console.log(response.data);
//             return response.data;
//         // } catch (error) {
//         //     console.log(error);
//         //     return error;        
//         // }
//     }
// }


export async function getById(id) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/'+id)

    return response;
}


export async function getCommentsById(id) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)

    return response;
}