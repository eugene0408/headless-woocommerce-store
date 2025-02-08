import React from 'react'
// redux
import { useSelector, useDispatch } from 'react-redux';
import { selectCart } from '../redux/selectors/cartSelectors';
import { selectCartStatus } from "../redux/selectors/cartStatusSelectors";
import { closeCart } from "../redux/slices/cartStatusSlice";


// MUI
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Box, ListItemButton, Button } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { CartItem } from './CartItem';

export const Cart = () => {
    const dispatch = useDispatch()
    const cart = useSelector(selectCart)
    const cartList = Object.values(cart)
    const isCartOpen = useSelector(selectCartStatus)

    const totalSum = () => {
        let total = 0
        cartList.forEach((item) => {
            total += item.price * item.quantity
        })
        return total
    }

  return (
    <Drawer
        anchor='right'
        open={isCartOpen}
        onClose={() => dispatch(closeCart())}
    >
        
        <List
            sx={{
                width: 380,
                height: '100%'
            }}
        >
            <ListItem>
                <ListItemIcon>
                    <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary='Кошик'/>
            </ListItem>
            {cartList.length > 0 && 
                <>
                    { /* -------------- Products in cart -------------- */ }
                    {cartList.map((product) => (
                        <ListItem key={`cart${product.id}`}>
                            <CartItem product={product}/>
                        </ListItem> 
                    ))
                    }
                    <Divider />
                    {/* ----------------- Total sum ------------------ */}
                    <Typography 
                        variant='h4'
                        sx={{
                            textAlign: 'right',
                            mt: 1,
                            '&::after': {
                                content: '"₴"',
                                fontSize: '0.6em',
                                ml: 0.2
                            }
                        }}
                    >
                        {totalSum()}

                    </Typography>
                    {/*  ------------- Action Buttons -----------------  */}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            mt: 3
                        }}
                    >
                        <Button
                            variant='contained'
                            endIcon={<ChevronRightIcon />}
                        >
                            Оформити замовлення
                        </Button>

                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            mt: 3
                        }}
                    >
                        <Button
                            variant='contained'
                            color='secondary'
                            onClick={()=> dispatch(closeCart())}
                            startIcon={<ChevronLeftIcon />}
                        >
                            Продовжити покупки
                        </Button>

                    </Box>
                </>
            }  
            {/* ------------------------------------  
                    Empty cart 
            --------------------------------------*/}
            {cartList < 1 && 
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        height: '100%',
                        position: 'relative'
                    }}
                >
                    <Typography>
                        Кошик порожній
                    </Typography>
                    <Button
                        variant='contained'
                        color='secondary'
                        onClick={() => dispatch(closeCart())}
                        startIcon={<ChevronLeftIcon />}
                    >
                        Назад
                    </Button>
                </Box>
            }   
        </List>

    </Drawer>
  )
}
