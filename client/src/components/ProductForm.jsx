import { useState } from "react";
import { productAPI } from "../services/api";

function ProductForm({

    product,

    onClose,

    refresh

}) {

    const [name, setName] = useState(product?.name || "");

    const [price, setPrice] = useState(product?.price || "");

    const [category, setCategory] = useState(product?.category || "");

    const [description, setDescription] = useState(product?.description || "");

    const handleSubmit = async (e) => {

        e.preventDefault();

        const data = {

            name,

            price,

            category,

            description

        };

        try {

            if (product) {

                await productAPI.update(product._id, data);

            }

            else {

                await productAPI.create(data);

            }

            refresh();

            onClose();

        }

        catch (err) {

            console.log(err);

        }

    };

    return (

        <div className="modal">

            <form

                className="product-form"

                onSubmit={handleSubmit}

            >

                <h2>

                    {

                        product

                            ? "Edit Product"

                            : "Add Product"

                    }

                </h2>

                <input

                    placeholder="Name"

                    value={name}

                    onChange={(e) => setName(e.target.value)}

                />

                <input

                    placeholder="Price"

                    type="number"

                    value={price}

                    onChange={(e) => setPrice(e.target.value)}

                />

                <input

                    placeholder="Category"

                    value={category}

                    onChange={(e) => setCategory(e.target.value)}

                />

                <textarea

                    placeholder="Description"

                    value={description}

                    onChange={(e) => setDescription(e.target.value)}

                />

                <button type="submit">

                    Save

                </button>

                <button

                    type="button"

                    onClick={onClose}

                >

                    Cancel

                </button>

            </form>

        </div>

    );

}

export default ProductForm;