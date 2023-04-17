import axios from "axios";

export default function Products() {
    return axios.get(process.env.products_api).then((data) => {
        return data.data
    }).catch(() => {
        throw new Error('Products API error');
    });
}