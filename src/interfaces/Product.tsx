/*********************************************
 * On this archive included Interfaces and constants
 * for any type product data's.
 * 
 * This is help to set the length type allowed for any 
 * product environment.
 */


/**
 * PRODUCT
 */
export interface product{
    id?:number |null,
    name:string,
    description?:string | null,
    sku?:string | null,
    um_id: number,
    group_id:number,
    active?:boolean | null,
    notes?:string | null,
    unitMeasure?:unitMeasure | null,
    group:group,
    created_at?:Date | null,
    updated_at?:Date | null,
    deleted_at?:Date | null
}

interface CONST_PRODUCT {
    NAME_MAX_LENGTH:number,
    DESCRIPTION_MAX_LENGTH: number,
    SKU_MAX_LENGTH:number,
    NOTES_MAX_LENGTH?:number
}

export const PRODUCT:CONST_PRODUCT={
    NAME_MAX_LENGTH:128,
    DESCRIPTION_MAX_LENGTH: 256,
    SKU_MAX_LENGTH: 256
}
//------------------------------------------------


/**
 * UNIT MEASURE
 */
export interface unitMeasure{
    id?:number | null,
    name:string,
    description?:string | null,
    symbol:string | null,
    created_at?:Date | null,
    updated_at?:Date | null,
    deleted_at?:Date | null
}

interface CONST_UNIT_MEASURE{
    NAME_MAX_LENGTH: number,
    DESCRIPTION_MAX_LENGTH: number,
    SYMBOL_MAX_LENGTH: number
}

export const UNITMEASURE:CONST_UNIT_MEASURE={
    NAME_MAX_LENGTH:256,
    DESCRIPTION_MAX_LENGTH:256,
    SYMBOL_MAX_LENGTH: 10
}
//------------------------------------------------

/**
 * GROUP
 */
export interface group{
    id?:number,
    name:string,
    description:string,
    created_at?:Date | null,
    updated_at?:Date | null,
    deleted_at?:Date | null
}

interface CONST_GROUP{
    NAME_MAX_LENGTH: number,
    DSECRIPTION_MAX_LENGTH: number
}

export const GROUP:CONST_GROUP={
    NAME_MAX_LENGTH:256,
    DSECRIPTION_MAX_LENGTH: 256
}

//------------------------------------------------

/**
 * IMAGE
 */
export interface image{
    id?:number,
    is_main?:boolean | null,
    path:string,
    product_id:number,
    created_at?:Date | null,
    updated_at?:Date | null,
    deleted_at?:Date | null
}
//------------------------------------------------

/**
 * SUPPLY
 */
export interface supply{
    id?:number,
    name:string,
    description?:string | null,
    um_id: number,
    created_at?:Date | null,
    updated_at?:Date | null,
    deleted_at?:Date | null
}
//------------------------------------------------


/**
 * PRODUCTS-SUPPLIES
 */
export interface productSupplies{
    id?:number,
    product_id:number,
    supply_id:number,
    um_id: number,
    amount:number,
    created_at?:Date | null,
    updated_at?:Date | null
    product:product,
    supply:supply,
    unitMeasure:unitMeasure
}
//------------------------------------------------