import axios from "axios";
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wnwzzjojmnpieykggbgi.supabase.co'
const supabaseKey = process.env.supabase_key
const supabase = createClient(supabaseUrl, supabaseKey)
export default async function getProducts() {
    let {data: products, error} = await supabase
        .from('products')
        .select('*');
    console.log(error);
    return products;
}