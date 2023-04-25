import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;

const ProductCard = ({ title, description }) => {
    return (
        <div>
            <Card hoverable style={{width: 240,}} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                <Meta title={title} description={description} />
            </Card>
        </div>
    );
};

export default ProductCard;