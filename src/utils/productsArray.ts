export type Product = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
    id: number
    image: string
    fullDescription?: string
}
const productsArray: Product[] = [
    {
        title: 'iPhone 14 Pro',
        description: 'This is iPhone 14 Pro',
        capacity: '256',
        type: 'phone',
        price: 1500,
        id: 1,
        image: '/images/01.webp',
        fullDescription: '<p> full descr </p>',
    },
    {
        title: 'iPhone 13 Pro',
        description: 'This is iPhone 13 Pro',
        capacity: '128',
        type: 'phone',
        price: 1000,
        id: 2,
        image: '/images/02.webp',
    },
    {
        title: 'iPhone 12 Pro',
        description: 'This is iPhone 12 Pro',
        capacity: '510',
        type: 'phone',
        price: 2500,
        id: 3,
        image: '/images/03.webp',
    },
    {
        title: 'iPhone 10 Pro',
        description: 'This is iPhone 10 Pro',
        capacity: '64',
        type: 'phone',
        price: 500,
        id: 4,
        image: '/images/04.webp',
    },
    {
        title: 'iPhone 14 Pro',
        description: 'This is iPhone 14 Pro',
        capacity: '510',
        type: 'phone',
        price: 2000,
        id: 5,
        image: '/images/05.webp',
    },
    {
        title: 'iPhone 8',
        description: 'This is iPhone 8 ',
        capacity: '64',
        type: 'phone',
        price: 200,
        id: 6,
        image: '/images/06.webp',
    },
]

export const getProductsObject = (array: Product[]) =>
    array.reduce(
        (object, product) => ({
            ...object,
            [product.id]: product,
        }),
        {}
    )

export default productsArray
