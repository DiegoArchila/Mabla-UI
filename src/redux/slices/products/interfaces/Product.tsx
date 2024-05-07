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

export interface unitMeasure{
    id?:number | null,
    name:string,
    description?:string | null,
    symbol:string | null,
    created_at?:Date | null,
    updated_at?:Date | null,
    deleted_at?:Date | null
}

export interface group{
    id?:number,
    name:string,
    description:string,
    created_at?:Date | null,
    updated_at?:Date | null,
    deleted_at?:Date | null
}

export interface image{
    id?:number,
    is_main?:boolean | null,
    path:string,
    product_id:number,
    created_at?:Date | null,
    updated_at?:Date | null,
    deleted_at?:Date | null
}

export interface supply{
    id?:number,
    name:string,
    description?:string | null,
    um_id: number,
    created_at?:Date | null,
    updated_at?:Date | null,
    deleted_at?:Date | null
}

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