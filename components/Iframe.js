import React from 'react';

const Iframe = ({ source }) => {

    /*if (!source) {
        return <div>Loading...</div>;
    }*/

    const src = source;     
    return (
        // basic bootstrap classes. you can change with yours.
        <div className="col-md-12">
            <div className="emdeb-responsive">
                <iframe src="http://team19-challenge2019.s3-website-eu-west-1.amazonaws.com" width="1500px"
        height="450px" frameborder="0" scrolling="no" allowfullscreen></iframe>
            </div>
        </div>
    );
};

export default Iframe;