import React from "react";
import Card from 'react-bootstrap/Card';
import bank from '../src/images/bank.webp';

export default function Home() {
    return (
        <>
            <div id="home">


                <h3>We are providing banking services to our <span id="span-1">Bank</span></h3>
                <h4>"We offer online banking facilities available from any device 24/7"</h4>
                <p>Open a new account, create savings plans, and manage your finances efficiently</p>

                <center>
                    <Card style={{ width: '50%' }}>
                        <Card.Img variant="top" src={bank} height={500} width={500} alt='bankimage' />
                        <Card.Body>
                            <Card.Title>BAD BANK</Card.Title>
                            <Card.Text>
                                “Everyday is a bank account, and the time is our currency. No one is rich, no one is poor, we’ve got 24 hours each.”
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </center>
            </div>


        </>
    )
}