import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles'

const products = [
    {id: 1, name: 'Shoes', description: 'Running shoes.', price: '$5', image: 'https://post.greatist.com/wp-content/uploads/sites/2/2021/07/379217-Hit-the-Off-Road-with-the-10-Best-Trail-Running-Shoes-of-2021-1200x628-Facebook-1200x628.jpg'},
    {id: 2, name: 'MacBook Pro', description: 'Apple Personal Computer.', price: '$17', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-gallery2-202011_GEO_US?wid=4000&hei=3072&fmt=jpeg&qlt=80&.v=1632941089000'},
];

const Products = () => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    );
}

export default Products;