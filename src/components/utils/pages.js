export const getPageCount = (totalPosts,limit) => {
    return Math.ceil(totalPosts/limit);
}

export const getPagesArray = (totalPages) => {
    let arr = new Array(totalPages).fill(0).map((_,index)=>index+1);
    // console.log(arr);
    return arr;
}