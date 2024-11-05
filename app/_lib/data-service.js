import { supabase } from './supabase'

export async function getCatalogs() {
    // const { data, error } = await supabase.from('catalogs').select('*')

    const { data, error } = await supabase.from('catalogs').select(
        `
        id,
        name,
        image,
        catalog_product!inner (
          id,
          products (
            id
          )
        )
      `
    )
    if (error) {
        console.error(error)
        throw new Error('Catalogs could not be loaded')
    }

    return data
}

const getHeader = async (id) => {
    const { data, error } = await supabase
        .from('header_banner')
        .select(`*`)
        .eq('id', id)
        .single()

    if (error) {
        console.error(error)
        throw new Error('Header could not be loaded')
    }

    return data
}

const getCatalogSection = async (catalogId) => {
    const { data, error } = await supabase
        .from('catalog_widget')
        .select(
            `*,
        ${catalogId}:catalogs!${catalogId}_id(*, catalog_product!inner (
          id,
          products (
            *, 
            product_images (
              id,
              image_url,
              is_primary
            )
          )
        ))`
        )
        .eq('id', 1)
        .single()

    if (error) {
        console.error(error)
        throw new Error('Catalog could not be loaded')
    }

    return data
}

const getFooterBanner = async (id) => {
    const { data, error } = await supabase
        .from('footer_banner')
        .select(
            `*,
        image_1:catalogs!image_1_id(*),
        image_2:catalogs!image_2_id(*),
        image_3:catalogs!image_3_id(*),
        image_4:catalogs!image_4_id(*)`
        )
        .eq('id', id)
        .single()

    if (error) {
        console.error(error)
        throw new Error('Footer could not be loaded')
    }

    return data
}

const getProducts = async (filter, search) => {
    let query = supabase.from('products')

    if (search)
        query = query.select(`*,product_images(*)`).ilike('name', `%${search}%`)

    if (filter === 'all' && !search) {
        query = query.select(`*,product_images(*)`)
    }
    if (filter !== 'all')
        query = query
            .select(
                `*,product_images(*),catalog_product!inner(id,catalogs(id,name))`
            )
            .eq('catalog_product.catalog_id', filter)

    const { data, error, count } = await query

    if (error) {
        console.error('Error:', error)
        throw new Error('Products could not be loaded')
    }

    return data
}

const getProduct = async (id) => {
    const { data, error } = await supabase
        .from('products')
        .select(`*,product_images(*)`)
        .eq('id', id)
        .single()

    if (error) {
        console.error(error)
        throw new Error('Product not found')
    }

    return data
}

const getRelatedProducts = async (id) => {
    // get catalog Id
    const { data: catalogData, error: catalogError } = await supabase
        .from('catalog_product')
        .select(`catalog_id,catalogs(*)`)
        .eq('product_id', 1)

    if (catalogError) {
        console.error(catalogError)
        throw new Error('Products could not be loaded')
    }

    const { data, error } = await supabase
        .from('products')
        .select(
            `*,product_images(*),catalog_product!inner(id,catalogs(id,name))`
        )
        .eq('catalog_product.catalog_id', catalogData[0].catalog_id)

    if (error) {
        console.error(error)
        throw new Error('Products could not be loaded')
    }

    return data
}

export {
    getHeader,
    getCatalogSection,
    getFooterBanner,
    getProducts,
    getProduct,
    getRelatedProducts,
}
