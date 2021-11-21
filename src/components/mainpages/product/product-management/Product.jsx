import React, {useContext} from 'react'
import {GlobalState} from "../../../../GlobalState"
import {Link} from "react-router-dom"
function Product() {
    const state = useContext(GlobalState)
    const [products, setProducts] = state.productAPI.products
    const action = state.productAPI.productAction


    // const get = () => {
    //     var now = new Date(products[0]?.update_at);
    //     return new Date(now.getTime() + now.getTimezoneOffset() * 60000);
    // }
    // /Giờ t sửa bên master, m sửa bên dai1. Okela? ok
    //Rồi á. m push lleenrar r t pull giờ ko, m fetch. à pull thử Trong này luôn a ok r gio
    //Đã sửa ối giờ ơi di ngu, giờ m push lên để t merge
    const updateProductOnclick = (e, id) => {
        const {name} = e.target
        products.map(product => {
            if (product.id === id) {
                product[name] = !product[name]
                action.updateProduct(product)
            }
        })
        setProducts([...products])
    }

    const sortProductsByDate = () => {
        return products.sort((a,b) => {
            return new Date(a.update_at).getTime() -
                new Date(b.update_at).getTime()
        }).reverse();
    }
    console.log(sortProductsByDate())



    return (
        <div className="main">
            <div className="main-header">
                <div className="mobile-toggle" id="mobile-toggle">
                    <i className="ti-menu"></i>
                </div>
                <div className="main-title">
                    Quản lý sản phẩm
                </div>
            </div>
            <div className="main-content">
                <div className="row">
                    <div className="col-12">
                        <div className="box-light box-btn">
                            <button className="btn btn-primary btn-icon-text btn-hover">
                                <i className="ti-plus"></i>
                                Thoát
                            </button>
                            <button className="btn btn-danger btn-icon-text btn-hover">
                                <i className="ti-trash"></i>
                                Xóa tất cả
                            </button>

                            <div className="form-search">
                                <div className="input-group">
                                    <input type="text" />
                                        <div className="icon">
                                            <i className="ti-search"></i>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="box-light box-btn">
                            <select className="selection">
                                <option value="">Chọn danh mục</option>
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                            </select>

                            <select className="selection">
                                <option value="">Chọn danh mục</option>
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                            </select>

                            <select className="selection">
                                <option value="">Chọn hãng</option>
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="box">
                            <div className="box-header">
                                Danh mục sản phẩm
                            </div>
                            <div className="box-body overflow-scroll">
                                <table>
                                    <thead>
                                    <tr>
                                        {/*<th>*/}
                                        {/*    <input type="checkbox" name="" id=""/>*/}
                                        {/*</th>*/}
                                        <th>STT</th>
                                        <th>Hình</th>
                                        <th>Tiêu đề</th>
                                        <th className="text-center">Nổi bật</th>
                                        <th className="text-center">Bán chạy</th>
                                        <th className="text-center">Hiển thị</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            products && sortProductsByDate().map((product, index) => (
                                                <tr key = {product.id}>
                                        {/*<td>*/}
                                        {/*    <input type="checkbox" name="" id=""/>*/}
                                        {/*</td>*/}
                                        <td>
                                            <input type="text" className="table-input" value={++index}/>
                                        </td>
                                        <td>
                                            <img src={product.thumbnail}alt="" className="table-img"/>
                                        </td>
                                        <td>
                                            {product.name} <sup className="update-end">Cập nhập lần cuối: {product.update_at}</sup>
                                            <div className="table-title">
                                                <Link to="#" className="mr-8 text-priamry">
                                                    <i className="ti-eye"></i>
                                                    view
                                                </Link>
                                                <Link to={`/admin/product/${product.id}`} className="mr-8 text-priamry">
                                                    <i className="ti-pencil-alt"></i>
                                                    edit
                                                </Link>
                                                <Link to="#" className="text-danger">
                                                    <i className="ti-trash"></i>
                                                    delete
                                                </Link>
                                            </div>
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox"
                                                   onClick={(e) => updateProductOnclick(e,product.id)}
                                                   checked = {product.features} name="features" id="features"/>
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" name="best_seller"
                                                   onClick={(e) => updateProductOnclick(e,product.id)}
                                                   checked = {product.best_seller}  id="best_seller"/>
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" name="status"
                                                   onClick={(e) => updateProductOnclick(e,product.id)}
                                                   checked = {product.status} id="status"/>
                                        </td>
                                    </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>

                            <ul className="pagination">
                                <li><a href="#"><i className="ti-angle-left"></i></a></li>
                                <li><a href="#" className="active">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                                <li><a href="#"><i className="ti-angle-right"></i></a></li>
                            </ul>
                        </div>


                    </div>
                </div>
            </div>
        </div>

    )
}

export default Product