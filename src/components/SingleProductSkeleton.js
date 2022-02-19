import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SingleProductSkeleton = () => {
    return (
        <div className="skeleton--product-card shadow-sm">
            <Skeleton className="skeleton--product-img" />
            <div className="skeleton--product-body">
                <h5 className="product-title"> <Skeleton count={4} /> </h5>
                <h6 className="product-subtitle mb-2 text-muted"> <Skeleton /> </h6>
            </div>

            <Skeleton height={38} />
        </div>
    );
};

export default SingleProductSkeleton;
