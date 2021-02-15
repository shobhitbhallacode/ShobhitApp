import { StatusBarIOS } from "react-native"
import { User } from "./UserService"
interface ProductDetails {
    ProductGuid: string;
    Name: string;
    Description: string;
    Price: string;
    Category: string;
    Subcategory: string;
    Size: string;
    Color: string;
    Brand: string;
    AverateRating: string;
    ProductFilter: string[];
    Discount: string;
    Product_Picture: File[];
    Shipping_Delay: string;
    FAQ: FAQ;
    PublicReviews: Reviews;
}
interface FAQ {
    ProductGuid:string;
    Question: string;
    Answer: string;
}
interface Reviews {
    ReviewsGuid:string;
    Public_Reviewer: User;
    Review_DateTime: Date;
    Rating: number,
    Description: string;
}
interface ShoppingBag {
    ShoppingBagGuid: string;
    UpdatedDateTime: Date;
    BagItems: ProductDetails[];
    InvoiceDetails:CustomerInvoice
}
interface CustomerInvoice{
    CustomerInvoiceGuid:string;
    FromAddress:string;
    ToAddress:string;
    Customer:User;
    Payment:PaymentDetails;
}
interface OrderDetails{
    OrderGuid:string;
    OrderStatus:string;
    ShippingStatus:string;
    RefundStaus:string;
    ReturnStatus:string;
    Comments:string;
    OrderedProduct:ProductDetails;
}
interface PaymentDetails {
    PaymentGuid:string
    TransactionID:string;
    PaymentMode: string;
    PaymentStatus:string;
    PaymentItems:ShoppingBag;
    notes:string;
}

const ProductCategory = [
    "Deals of the day",
    "Top Searched",
    "70 % off",
    "Best of season sales",
    "Featured brands",
    "Top selection",
    "Best deals",
    "Great discounts",
    "Free Delivery"
]
const ProductFilter = [
    "Size",
    "Color",
    "Brand",
    "Categories",
    "Sub-categories",
    "Ratings",
]
const ProductSort = [
    "Whats's New",
    "Price Low to High",
    "Price High to low",
    "Popularity",
    "Discounts",
    "Ratings"
]