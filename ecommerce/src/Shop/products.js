import React, { useState, useEffect } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { dummy_data } from "./dummy";



const ProductGrid = ({ minPrice, maxPrice, text }) => {
    const [items, setItems] = useState([]);
    const fetchData = async () => {
        try {
            const url = `http://127.0.0.1:8000/products?minPrice=${minPrice}&maxPrice=${maxPrice}&text=${text}`;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setItems(data);

        } catch (error) {
            console.error("Fetching error: ", error);
        }
    };

    useEffect(() => {
        fetchData(); // Call fetchData when minPrice or maxPrice changes
    }, [minPrice, maxPrice, text]);



    return (
        <Grid container spacing={4}>
            {items.map(product => (
                <Grid item xs={6} sm={6} key={product.product_name}>
                    <Card style={{
                        // backgroundColor: 'white', // Replace with your desired background color
                        //boxShadow: '0px 0px 24px rgba(0, 0, 0, 0.5)', // Standard CSS for boxShadow
                        //margin: '5px',
                        //borderWidth: '5px',
                        //borderStyle: 'solid', // You need to set a border style
                        //borderColor: 'purple' // And a border color
                        boxShadow: "black"
                    }}>
                        <CardMedia
                            component="img"
                            alt={product.name}
                            //height="140"
                            image={product.imageUrl}

                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {product.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {product.description}
                            </Typography>
                            <Typography variant="h6" color="textPrimary">
                                ${product.price}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductGrid;
