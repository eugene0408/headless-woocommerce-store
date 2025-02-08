import React from 'react';
import { useDispatch } from 'react-redux';
import { addAmount, reduceAmount, removeItem } from '../redux/slices/cartSlice';
import { 
  Card,
  Box,
  Typography,
  CardMedia,
  IconButton,
} from '@mui/material';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CloseIcon from '@mui/icons-material/Close';


export const CartItem = ({product}) => {

  const dispatch = useDispatch();

  return (
    <Card
      sx={{
        width: '100%'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%'
        }}
      >
        <CardMedia 
          component={'img'}
          image={product.image}
          alt={product.name}
          sx={{
            width: '120px',
            height: '120px'
          }}
        />

        <Box
          component='div'
          sx={{
            display: 'flex',
            flexDirection: 'column', 
            p: 1,
            width: '80%'
          }}
        >
          <Typography
            variant='h6'
          >
            {product.name}
          </Typography>
          {/* ------------- Weight ---------- */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Typography>
              {product.weight}
              <span style={{fontSize: '12px'}}>г</span>
            </Typography>
          </Box>
          {/* --------------------------------- */}

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
          {/* ------------- Quantity counter ---------- */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <IconButton
                onClick={() => dispatch(reduceAmount({id: product.id}))}
              >
                <KeyboardArrowDownIcon />
              </IconButton>
                <Typography>
                  {product.quantity}
                </Typography>
              <IconButton
                onClick={() => dispatch(addAmount({id: product.id}))}
              >
                <KeyboardArrowUpIcon />
              </IconButton>

            </Box>
            {/* ------------- Total Price ---------- */}
            <Box>
              <Typography
                variant='h6'
                sx={{
                  '&::after': {
                    content: '"₴"',
                    fontSize: '0.8em',
                    ml: 0.2
                  }
                }}
              >
                {product.quantity * product.price}
              </Typography>
            </Box>
          </Box>

        </Box>

        {/* ------------- Delete Item ---------- */}
        <IconButton
          onClick={() => dispatch(removeItem({id: product.id}))}
          sx={{
            position: 'absolute',
            top: 0,
            right: 5
          }}
        >
          <CloseIcon />
        </IconButton>

      </Box>

    </Card>
  )
}
