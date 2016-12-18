
export const ADD_PRODUCT = 'ADD_PRODUCT';
export function addProduct(productData) {
    return {
        type: ADD_PRODUCT,
        id: productData.id,
        data: productData
    }
}

export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export function updateProduct(id, productData) {
    return {
        type: UPDATE_PRODUCT,
        id: id,
        data: productData
    }
}

export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export function deleteProduct(id) {
    return {
        type: DELETE_PRODUCT,
        id: id
    }
}

export const SET_PRODUCTS = 'SET_PRODUCTS';
export function setProducts(products) {
    return {
        type: SET_PRODUCTS,
        data: products
    }
}

export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
export function loadProducts() {
    return {
        type: LOAD_PRODUCTS
    }
}


export const ADD_CATEGORY = 'ADD_CATEGORY';
export function addCategory(categoryData) {
    return {
        type: ADD_CATEGORY,
        id: categoryData.id,
        data: categoryData
    }
}

export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export function updateCategory(id, categoryData) {
    return {
        type: UPDATE_CATEGORY,
        id: id,
        data: categoryData
    }
}

export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export function deleteCategory(id) {
    return {
        type: DELETE_CATEGORY,
        id: id
    }
}

export const SET_CATEGORIES = 'SET_CATEGORIES';
export function setCategories(categories) {
    return {
        type: SET_CATEGORIES,
        data: categories
    }
}

export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';
export function loadCategories() {
    return {
        type: LOAD_CATEGORIES
    }
}
