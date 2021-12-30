import { Input } from '@mui/material';
import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,Form,FormGroup } from 'reactstrap';

const Upload = (props) => {
  return (
    <div>
      <Card>
       
        <CardBody style={{textAlign:"center"}}>
          <CardTitle style={{marginBottom:"0.8 rem"}}>Upload Excel Sheet (POPUP)	</CardTitle>
          <Form>
          <FormGroup style={{marginTop:"1 rem"}}> 
          
          <Input type="file" name="file"  />
          
        </FormGroup>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Upload;