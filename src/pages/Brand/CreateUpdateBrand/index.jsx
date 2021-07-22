import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import BrandService from '../../../services/BrandService';
import BrandForm from '../BrandForm';
import { useFetchBrand } from '../hooks/useFetchBrand';

function BrandRegister() {

    const history = useHistory();

    const { id } = useParams();
    const brand = useFetchBrand(id);
    function onCancel() {
        history.goBack();
    }

    const onSubmit = (name) => {

        if (id) {
            BrandService.alterar({ id, name })
                .then(res => {
                    history.goBack();
                });
        } else {
            BrandService.cadastrar({ name })
                .then(res => {
                    history.goBack();
                });
        }
    }

    return (
        <BrandForm brand={brand} onSubmit={onSubmit} onCancel={onCancel} />
    );
}

export default BrandRegister;