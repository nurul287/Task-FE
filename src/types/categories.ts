
interface subcategories { id: number, name: string }

export interface categories extends subcategories {
    subcategories: subcategories[]
}