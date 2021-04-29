/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useRef} from 'react'
import {Button,Card,Form,Container,Row,Col, Alert, Modal} from "react-bootstrap"



const App = () => {
  const [prime, setPrime] = useState(0)
  const [num, setNum] = useState(0)

  const isPrime = (n: any) =>
    {
        // Base case
        if (n <= 1)
            return false

    
        // Check from 2 to n-1
        for (let i = 2; i < n; i++)
            if (n % i === 0)
                return false
        return true
    }
    // Function to print primes
    function printPrime(e: any){
      e.preventDefault()
        for (let i = 2; i <= num; i++) {
            if (isPrime(i)){
            setPrime(i)
            // console.log(i + "no")
            }
        }
    }

    // console.log(prime)
  return (
    <div style={{backgroundColor: '#FFBE33', height: '100vh', flex: 1, color: 'white' }}>
      <Container fluid style={{paddingTop: '50px', }}>
        <Row>
          <Col>
          </Col>
          <Col>
            <h1 style={{ paddingBottom: '50px'}}>Let's Play With Prime Numbers!</h1>
            
            <h4 style={{ paddingBottom: '50px'}}>Enter a number and we will find the highest prime number lower than the input number:</h4>
            
            <Form style={{ paddingBottom: '50px'}} onSubmit={printPrime}>
              <Form.Group style={{ paddingBottom: '50px'}}>
                  <Form.Control
                    type="number" 
                    onChange={(e) => {
                    setNum(Number(e.target.value))
                    setPrime(0)
                    }} required placeholder="Enter a number larger than 1" style={{height: '8vh', }} className='w-100'/>
                    
              </Form.Group>
              <Button className="w-100" type="submit">Calculate</Button>
            </Form>
            <h3>Highest Prime Number Before {num} is {prime}</h3>
          
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
    </div>  
  )
}

export default App
