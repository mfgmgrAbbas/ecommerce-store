import qs from 'query-string'

import {Product} from '@/types'

const URL = `${process.env.NEX_PUBLIC_API_URL}/products`

interface Query {
    categoyId?: string
    colorId?: string
    sizeId?: string
    isFeatured: boolean
}

const getProducts = async (query: Query): Promise<Product[]>=>{
const url = qs.stringifyUrl({
    url:URL,
    query: {
        colorId: query.categoyId,
        sizeId: query.categoyId,
        categoryId: query.categoyId,
        isFeatured: query.isFeatured
    }
})

    const res = await fetch(URL)

    return res.json()
}

export default getProducts

// import { Category } from "@/types";

// const URL=`${process.env.NEXT_PUBLIC_API_URL}/categories`;

// const getCategories = async (): Promise<Category[]> => {
//   const res = await fetch(URL);

//   return res.json();
// };

// export default getCategories;
