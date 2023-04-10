import { IProduct } from "../types/product"

interface IProps {
    products: IProduct[],
    onRemove: (_id: number) => void
  }
const ProductPage = (props:IProps) => { // nhận props từ App.tsx

    const removeProduct = (_id:number) => { // hàm xử lý sự kiện khi click vào nút remove
       props.onRemove(_id) // gọi hàm onRemove từ props truyền vào
    }
console.log( "props", props.products);

    return (
        <div>
        {props.products.map((item: IProduct, index: number) => ( // add index parameter to the map function
          <div key={index}>
            {item.name}
            <button onClick={() => removeProduct(item._id)}>Remove</button> 
            {/* <button onClick={() => removeProduct(item._id)}>Remove</button>  */}
          </div>
        ))}
      </div>
    )
}

export default ProductPage