import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { GetProductResults, Welcome } from '../types';

export const getStaticProps: GetStaticProps =async () => {
    const response = await fetch('https://fakestoreapi.com/products/');
    const data: GetProductResults = await response.json();
    // console.log('data', data);
    return {
        props :{
            list: data
        }
    }
}

const Products: NextPage <{list: Welcome[]}> = ({list}) => {
    // console.log('list', list);
    return (
        <>
        <div>
        <div>Welcome</div>
        </div>
        <div>
            {
                list.map((item) => (
                    <div>{item.title}</div>
                ))
            }
        </div>
        </>
    )
}

export default Products