import React, { useEffect } from 'react';
import CompanyOverview from '../CompanyOverview';
import ProductCapacity from '../ProductCapacity';
import RDCapacity from '../RDCapacity/RDCapacity';
import TradeCapabilities from '../TradeCapablities/TradeCapabilities';
import SendInquiry from '../SendInquiry';
const CompanyProfile = ({ product }) => {

    return (
        <section className=''>
            <CompanyOverview />
            <ProductCapacity />
            <RDCapacity />
            <TradeCapabilities />
            <SendInquiry product={product} />
        </section>
    );
};

export default CompanyProfile;