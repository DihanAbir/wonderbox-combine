// import {
//     Card,
//     CardHeader,
//     CardBody,
//     CardFooter,
//     Typography,
//     Avatar,
//     Tooltip,
//     Button,
// } from "@material-tailwind/react";
// import { Link } from "react-router-dom";

// const ProductCard = ({ product }) => {
//     console.log(product);
//     return (
//         <Card className="max-w-[24rem] overflow-hidden">
//             <CardHeader
//                 floated={false}
//                 shadow={false}
//                 color="transparent"
//                 className="m-0 rounded-none"
//             >
//                 <img className="h-96 mx-auto"
//                     src={product.image}
//                     alt="ui/ux review check"
//                 />
//             </CardHeader>
//             <CardBody>
//                 <Typography variant="h4" color="blue-gray">
//                     {product?.title}
//                 </Typography>
//                 <Typography variant="lead" color="gray" className="mt-3 font-normal">
//                     <ul className="text-sm">
//                         {
//                             product?.features.map((feature, i) => (
//                                 <li>{feature}</li>
//                             ))
//                         }
//                     </ul>
//                 </Typography>
//             </CardBody>
//             <CardFooter className="flex items-center justify-between">
//                 <Link to={`/products/${product?._id}`}>
//                     View Details
//                 </Link>
//             </CardFooter>
//         </Card>
//     );
// }

// export default ProductCard;