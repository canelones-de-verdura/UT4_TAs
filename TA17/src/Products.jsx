import { useParams } from "react-router-dom";

function Products() {
    let { id } = useParams();

    return (
        <div>{id}</div>
    );
}

export default Products;
