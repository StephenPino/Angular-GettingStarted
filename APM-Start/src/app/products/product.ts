// Strong Typing interface allows for dev to show us when invalid data type is inputted
export interface IProduct {
    productId: number,
    productName: string,
    productCode: string,
    releaseDate: string,
    description: string,
    price: number,
    starRating: number,
    imageUrl: string,
}