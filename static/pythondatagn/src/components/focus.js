import React, { Fragment } from 'react';
import styled from 'styled-components';
import remcalc from 'remcalc';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';

const CenteredCol = styled(Col)`
    text-align: center;
`

const Subject = ({ content }) => (
    <CenteredCol xs={12} md={6} lg={4}>
        {content}
    </CenteredCol>
)

const subjects = ["Data Science", "Data Mining", "Data Analytics", "High Scalability Computing", "Machine Learning", "Open Source Python"];

const Focus = () => (
    <Grid>
        <Row>
            {subjects.map(subject => (
            <Subject content={subject} />

            ))}
        </Row>

    </Grid>
)

export default Focus;
