export interface IProductInOrder {
  _id: string
  id: number
  quantity: number
  img: string
  barcode: string
  name: string
  sku: string
  marketPrice: number
  marketPriceDP: number
  marketPriceSDP: number
  marketPriceCP: number
  ourPrice: number
  ourPriceDP: number
  ourPriceSDP: number
  ourPriceCP: number
  MB: number
  DP: number
  SDP: number
  CP: number
  category: string
  proveedor: string
  skuProveedor: string
  unit: string
  dimension: string
  desc: string
  minQt: number
  IVA: number
  IVADP: number
  IVASDP: number
  IVACP: number
  enabled: boolean
  nameProveedor: string
  status: Status
  stock: number
  dias: any
  currentUnit: string
  weightValue: number
  weightUnits: string
  length: any
  width: any
  height: any
  place: any
  shelft: any
  stand: any
  quantityStep: any
  SPOPrice: any
  brand: any
  businessType: any
  decimal: number
  quantityOrder: number
}

export interface Status {}
