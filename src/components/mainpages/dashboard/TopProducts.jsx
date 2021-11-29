import React from 'react'

export default function  TopProducts(props) {
    const {item} = props

    const groupBy = item.reduce((r, a) => {
        r[a.product?.id] = [...r[a.product?.id] || [], a]
        return r;
    }, {});
    const dataAfterGroupBy = Object.keys(groupBy).map(key => groupBy[key]).sort((a, b) => b.length - a.length)

    console.log(props)
    return (
        <div className="col-3 col-md-6 col-sm-12">
            <div className="box f-height">
                <div className="box-header">
                    Top sản phẩm
                </div>
                {
                    dataAfterGroupBy && dataAfterGroupBy.slice(0,3).map((item, index) => {
                        return (
                            <div className="box-body" key={index}>
                                <ul className="product-list">
                                    <li className="product-list-item">
                                        <div className="item-info">
                                            <img src={item[0].product?.thumbnail} alt=""/>
                                            <div className="item-name">
                                                <div className="product-name">{item[0].product?.name}</div>
                                                <div className="text-second">{item[0].product?.category?.brand?.name}</div>
                                            </div>
                                        </div>
                                        <div className="item-sale-info">
                                            <div className="text-second">Tổng</div>
                                            <div className="product-sale">#{item.length}</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}