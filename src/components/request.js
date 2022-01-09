import useHttp from "./http";

export default async function request(url)  {
    let array=[]
    for await (const commit of useHttp(url)) {
        array.push(commit);
    }
    return array
}