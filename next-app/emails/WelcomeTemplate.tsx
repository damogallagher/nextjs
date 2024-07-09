import React, { CSSProperties } from 'react'
import { Html, Body, Container, Text, Link, Preview, Tailwind } from '@react-email/components';

const WelcomeTemplate = ({ name }: { name: string }) => {
    return (
        <html>
            <Preview>Welcome aboard!</Preview>
            <Tailwind>
                <body className="bg-white">
                    <Container>
                        <Text className="font-bold t-xlg">Hello {name}</Text>
                        <Link href='https://codewithmosh.com'>Code With Mosh</Link>
                    </Container>
                </body>
            </Tailwind>
        </html>
    )
}



export default WelcomeTemplate
