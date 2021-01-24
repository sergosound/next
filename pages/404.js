import React from 'react';
import Link from 'next/link';
import classes from '../client/styles/error.module.scss'

export default function ErrorPage() {
    return (
        <>
            <h1 className={classes.error}>Error 404</h1>
            <p>Please <Link href="/"><a>go back</a></Link> to safety</p>
        </>
    )
}

ErrorPage.getInitialProps = async ({ res, err }) => {
    let statusCode = null

    if (res) {
        ({ statusCode } = res)
    } else if (err) {
        ({ statusCode } = err)
    }
    return {
        namespacesRequired: ['index'],
        statusCode,
    }
}