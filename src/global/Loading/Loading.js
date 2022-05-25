/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { css } from "@emotion/react";
import PuffLoader from "react-spinners/PuffLoader";

const Loading = () => {
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState("#da3642");
    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
    `;

    return (
        <div style={{height: 'calc(100vh - 120px)'}} className="Loading flex justify-center items-center">
            <PuffLoader color={color} loading={loading} css={override} size={250} />
        </div>
    );
};

export default Loading;