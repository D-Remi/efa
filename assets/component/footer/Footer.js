import React from 'react';

const Footer = () => {
    return (
        <div className='container-fuild footer d-flex justify-content-center p-3'>
            <p className='container d-flex justify-content-center'>
                <span style={{display: 'block', margin: '0 10px'}} className='text-white'>Mentions légales </span>
                <span style={{display: 'block', margin: '0 10px'}} className='text-white'> – </span>
                <span style={{display: 'block', margin: '0 10px'}} className='text-white'><a className="text-decoration-none text-white" href="/admin">&#x1F512; Admin</a></span>
            </p>
        </div>
    );
};

export default Footer;